Rails.application.routes.draw do
  resources :children
  resources :incentives
  resources :audio_recordings
  resources :web_cam_captures
  resources :orderings
  resources :prizes
  resources :kids_answers
  resources :phrases
  resources :answer_banks
  resources :videos
  resources :points
  resources :levels
  # resources :messages
  # resources :terms, only: [:create, :index, :update]
  # localhost:3000/api/v1/login
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :index]

      post "/login", to: "auth#create"
      get '/profile', to: 'users#profile'

    end
  end
end
