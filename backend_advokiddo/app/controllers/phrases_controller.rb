class PhrasesController < ApplicationController
    skip_before_action :logged_in?, only: [:create, :index, :update]

    def index 
        phrases=Phrase.all 
        render json: phrases.to_json(:except => [:updated_at, :created_at])
    end 

    def create 
        @phrase=Phrase.new(phrase_one: phrase_params[:phrase_one], phrase_two: phrase_params[:phrase_two], phrase_three: phrase_params[:phrase_three], user_id: phrase_params[:user_id], child_id: phrase_params[:child_id])

        if @phrase.save
            render json: @phrase
        else
            render json: { error: 'Phrase not saved' }
        end
    end 

    def destroy 
        phrase=Phrase.find(phrase_params[:id])
        phrase.destroy 
    end 

    def update 
        @phrase=Phrase.all.find(phrase_params[:id])
        @phrase.update(phrase_params)
        render json: @phrase
    end 

    private
    def phrase_params
        params.require(:phrase).permit(:phrase_one, :phrase_two, :phrase_three, :user_id, :child_id)
    end
end
