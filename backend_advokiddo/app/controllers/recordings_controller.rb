class RecordingsController < ApplicationController
        skip_before_action :logged_in?, only: [:create, :index, :update]
        before_action :check_configuration, only: [:create]

        def check_configuration
            render 'configuration_missing' if 
               Cloudinary.config.api_key.blank?
        end
    
        def uploadToCloudinary(audioFile)
            Cloudinary::Uploader.upload(audioFile)["url"]
        end
    
        def index 
            recordings=Recording.all 
            render json: recordings.to_json(:except => [:updated_at, :created_at])
        end 
    
        def create 
            # user = User.all.find_by(username: params[:username])
            url = uploadToCloudinary(recording_params[:audio])
            @recording=Recording.new(child_id: recording_params[:child_id], level_id: recording_params[:level_id], audio: url
        
            if @recording.save
                render json: @recording
            else
                render json: { error: 'Recording not saved' }
            end
        end 
    
        def destroy 
            recording=Recording.find(recording_params[:id])
            recording.destroy 
        end 
    
        def update 
            @recording=Recording.all.find(recording_params[:id])
            @recording.update(recording_params)
            render json: @recording
        end 
    
        private
        def recording_params
            params.require(:recording).permit(:child_id, :audio, :level_id)
        end
end
