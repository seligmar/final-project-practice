class UsersController < ApplicationController
  def index
    users = User.all 
    render json: users
  end 

  def signin
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      render json: user
    else 
      render json: {error: 'username and password combination invalid'}, status: 401
     # redirect to: "/signin"
    end 
  end 

  def create_new_user 
    user = User.new(username: params[:username], password: params[:password])
    if user.save
        render json: user, status: :created
        # donation = Donation.create(user_id: user.id, total: 0)
    else
        render json: { user_errors: user.errors.full_messages }, status: :unprocessable_entity
    end 

  end 

  private 

  def user_params 
    params.require(:user).permit(:username, :password)
  end 

end
