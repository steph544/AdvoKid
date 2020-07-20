class ChildrenController < ApplicationController
    before_action :check_configuration, only: [:create]

    def check_configuration
        render 'configuration_missing' if 
           Cloudinary.config.api_key.blank?
    end

    def uploadToCloudinary(imageFile)
        Cloudinary::Uploader.upload(imageFile)["url"]
    end
    
    def index 
        children=Child.all 
        render json: children.to_json(:except => [:updated_at, :created_at])
    end 

    def create 
        username = image_params[:username]
        user = User.all.find_by(username: username)
        url = uploadToCloudinary(image_params[:image])
        @child=Child.new(user_id: user.id, last_name: child_params[:last_name], age: child_params[:age], image: url, first_name: child_params[:first_name])
    
        if @child.save
            render json: @child
        else
            render json: { error: 'Child not saved' }
        end
    end 

    def destroy 
        child=Child.find(child_params[:id])
        child.destroy 
        
    end 

    private
    def child_params
        params.require(:child).permit(:user_id, :last_name, :age, :image, :first_name)
    end
end
