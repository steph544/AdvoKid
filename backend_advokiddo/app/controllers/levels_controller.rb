class LevelsController < ApplicationController
    skip_before_action :logged_in?, only: [:create, :index]
    
    def index 
        levels=Level.all 
        render json: levels.to_json
    end 

    def create 
    @level = Level.new(child_id: level_params[:child_id], name: level_params[:name])

        if @level.save
            render json: @level, status: :ok
        else
            render json: { error: 'Image not saved' }
        end
    end 

    # def destroy 
    #     level=L.find(params[:id])
    #     image.destroy 
        
    # end 

    private
    def level_params
        params.permit(:name, :child_id)
    end
end
