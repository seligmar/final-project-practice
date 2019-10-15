Rails.application.routes.draw do
get "/users", to: "users#index" #delete this after leave dev mode
post "/signin", to: "users#signin"
post "/new-supporter", to: "users#create_new_user"
get "/validate", to: "users#validate_new"

get '/events', to: "events#index"
post '/new-event', to: "events#create"

post '/donate', to: "donations#donate"
get '/donations', to: "donations#index" #delete this after leave dev mode
end
