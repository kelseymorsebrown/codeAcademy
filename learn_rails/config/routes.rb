Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  # Defines the root path route ("/")
  # root "posts#index"

  # Travel Site
  get 'tags', to: 'tags#index'
  get '/tags/:id', to: 'tags#show', as: :tag
  get '/destinations/:id', to: 'destinations#show', as: :destination
  get '/destinations/:id/edit', to: 'destinations#edit', as: :edit_destination 
  patch '/destinations/:id', to: 'destinations#update' 

  # Bass-Music Albums
  get 'bass-music', to: "albums#index"
  resources :albums

  # Bookmarks
  get 'books', to: "books#index"
  resources :books

  # Innovation-Cloud Signups
  get 'signups', to: "signups#new"

  get '/thanks', to: 'pages#thanks'
  resources :signups

end
