class UserEventsController < ApplicationController
  
  def create
    user = User.find_by(username: params[:username])
    user_event = UserEvent.new(user_id: user.id, event_id: params[:event_id])
    if user_event.save
        render json: user_event, status: :create
    else  
        render json: { error: user_event.errors.full_messages }, status: :unprocessable_entity
    end 

  end

  def user_event_params 
    params.require(:user_event).permit(:username, :event_id)
  end

end
