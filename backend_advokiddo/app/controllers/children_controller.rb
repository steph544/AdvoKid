class ChildrenController < ApplicationController
    skip_before_action :logged_in?, only: [:create, :index, :update]
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
        # username = child_params[:username]
        # byebug
        user = User.all.find_by(username: params[:username])
        url = uploadToCloudinary(child_params[:image])
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

    def update 
        @child=Child.all.find(child_params[:id])
        @child.update(image: child_params[:image])
        render json: @child
    end 

    private
    def child_params
        params.require(:child).permit(:id, :username, :last_name, :age, :image, :first_name)
    end
end
