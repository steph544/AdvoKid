class IncentivesController < ApplicationController
    skip_before_action :logged_in?, only: [:create, :index, :update]

    def index 
        incentives=Incentive.all 
        render json: incentives.to_json(:except => [:updated_at, :created_at])
    end 

    def create 
        @incentive=Incentive.new(prizeone: params[:prizeone], prizetwo: incentive_params[:prizetwo], prizethree: incentive_params[:prizethree], prizefour: incentive_params[:prizefour], prizefive: incentive_params[:prizefive], prizesix: incentive_params[:prizesix], user_id: incentive_params[:user_id], child_id: incentive_params[:child_id], points_required: incentive_params[:points_required])

        if @incentive.save
            render json: @incentive
        else
            render json: { error: 'incentive not saved' }
        end
    end 

    def destroy 
        incentive=Incentive.find(incentive_params[:id])
        incentive.destroy 
    end 

    def update 
        @incentive=Incentive.all.find(incentive_params[:id])
        @incentive.update(incentive_params)
        render json: @incentive
    end 

    private
    def incentive_params
        params.require(:incentive).permit(:id, :points_required, :prizeone, :prizetwo, :prizethree, :prizefour, :prizefive, :prizesix, :user_id, :child_id)
    end
end
