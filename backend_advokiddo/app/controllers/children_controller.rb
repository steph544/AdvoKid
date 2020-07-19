class ChildrenController < ApplicationController
    def index 
        children=Child.all 
        render json: children.to_json(:except => [:updated_at, :created_at])
    end 

    def create 
        @child=Child.new(user_id: child_params[:user_id], last_name: child_params[:last_name], age: child_params[:age], image: child_params[:image], first_name: child_params[:first_name])
    
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
