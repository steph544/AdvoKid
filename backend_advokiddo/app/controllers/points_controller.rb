class PointsController < ApplicationController
    skip_before_action :logged_in?, only: [:create, :index, :update]

    def index 
        points=Point.all 
        render json: points.to_json(:except => [:updated_at, :created_at])
    end 

    def create 
        # user = User.all.find_by(username: params[:username])
        @point=Point.new(child_id: point_params[:child_id], total: point_params[:total])
    
        if @point.save
            render json: @point
        else
            render json: { error: 'Points not saved' }
        end
    end 

    def destroy 
        point=Point.find(point_params[:id])
        point.destroy 
    end 

    def update 
        @point=Point.all.find(point_params[:id])
        @point.update(image: point_params[:image])
        render json: @point
    end 

    private
    def point_params
        params.require(:point).permit(:child_id, :total)
    end
end
