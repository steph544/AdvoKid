class PrizesController < ApplicationController
    skip_before_action :logged_in?, only: [:create, :index, :update, :destroy]

    def index 
        prizes=Prize.all 
        render json: prizes.to_json
    end 

    def create 
        # user = User.all.find_by(username: params[:username])
        @prize=Prize.new(child_id: prize_params[:child_id], name: prize_params[:name])
    
        if @prize.save
            render json: @prize
        else
            render json: { error: 'Prizes not saved' }
        end
    end 

    def destroy 
        prize=Prize.find(prize_params[:id])
        prize.destroy 
    end 

    def update 
        @prize=Prize.all.find(prize_params[:id])
        @prize.update(image: prize_params[:image])
        render json: @prize
    end 

    private
    def prize_params
        params.permit(:id, :child_id, :name)
    end
end
