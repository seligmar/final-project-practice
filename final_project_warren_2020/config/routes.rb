Rails.application.routes.draw do
get "/users", to: "users#index" #delete this after leave dev mode
post "/signin", to: "users#signin"
post "/new-supporter", to: "users#create_new_user"
get '/events', to: "events#index"
post '/events', to: "events#create"
end
