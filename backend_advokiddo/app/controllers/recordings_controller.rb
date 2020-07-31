class RecordingsController < ApplicationController
        skip_before_action :logged_in?, only: [:create, :index, :update, :destroy]
        before_action :check_configuration, only: [:create]

        def check_configuration
            render 'configuration_missing' if 
               Cloudinary.config.api_key.blank?
        end
    
        def uploadToCloudinary(audioFile)
            Cloudinary::Uploader.upload(audioFile, 
            :resource_type => :video)["url"]
       
        end
    
        def index 
            recordings=Recording.all 
            render json: recordings.to_json(:except => [:updated_at, :created_at])
        end 
    
        def create 
            # user = User.all.find_by(username: params[:username])
             
            url = uploadToCloudinary(params[:audio])
            @recording=Recording.new(child_id: params[:child_id], level_id: params[:level_id], audio: url)
    
            if @recording.save
                render json: @recording
            else
                render json: { error: 'Recording not saved' }
            end
        end 
    
        def destroy 
            recording=Recording.find(params[:id])
            recording.destroy 
        end 
    
        def update 
            @recording=Recording.all.find(recording_params[:id])
            @recording.update(recording_params)
            render json: @recording
        end 
    
        private
        def recording_params
            params.require(:recording).permit! 
        end
end

