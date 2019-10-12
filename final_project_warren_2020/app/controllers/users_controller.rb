class UsersController < ApplicationController
  def index
    users = User.all 
    render json: users
  end 

  def signin
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      render json: { username: user.username, id: user.id } 
    else 
      render json: {error: 'username and password combination invalid'}, status: 401
    end 
  end 

  def create_new_user 
    user = User.new(username: params[:username], password: params[:password], emailaddress: params[:emailaddress])
    if user.save
        render json: { username: user.username, id: user.id }, status: :create
    else 
      if (user.errors.full_messages[0] === 'Username has already been taken')
        render json: {error: 'username and password combination invalid'}
      else 
        render json: { error: user.errors.full_messages }, status: :unprocessable_entity
    end 
  end 

  def validate 

  end 

  end 

  private 

  def user_params 
    params.require(:user).permit(:username, :password, :emailaddress)
  end 

end
