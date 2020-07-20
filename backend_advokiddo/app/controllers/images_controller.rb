class ImagesController < ApplicationController
    skip_before_action :logged_in?, only: [:create, :index]
    before_action :check_configuration, only: [:create]

    def check_configuration
        render 'configuration_missing' if 
           Cloudinary.config.api_key.blank?
    end

    def uploadToCloudinary(imageFile)
        Cloudinary::Uploader.upload(imageFile)["url"]
    end
    
    def index 
        images=Image.all 
        render json: images.to_json
    end 

    def create 
    username = image_params[:username]
    user = User.all.find_by(username: username)
    url = uploadToCloudinary(image_params[:screen_shot])
    @image = Image.new(user_id: user.id, screen_shot: url, child_id: image_params[:child_id])

        if @image.save
            render json: @image, status: :ok
        else
            render json: { error: 'Image not saved' }
        end
    end 

    def destroy 
        image=Image.find(params[:id])
        image.destroy 
        
    end 

    private
    def image_params
        params.permit(:username, :screen_shot, :child_id)
    end
end
