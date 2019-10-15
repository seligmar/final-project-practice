class EventsController < ApplicationController

  def index 
    events = []
    Event.all.map do |event|
      eachEvent = {
      id: event.id, 
      start_time: event.start_time.strftime("%H:%M"), 
      end_time: event.end_time.strftime("%H:%M"), 
      day: event.day,
      month: event.month, 
      year: event.year,
      street_address_1: event.street_address_1,
      street_address_2: event.street_address_2,
      city: event.city,
      state: event.state,
      zip: event.zip,
      title: event.title,
      lng: event.lng,
      lat: event.lat}
      events << eachEvent
    end 
    render json: events
  end 

  def create 
      event = Event.new(
        start_time: params[:start_time], 
        end_time: params[:end_time], 
        day: params[:day],
        month: params[:month], 
        year: params[:year],
        street_address_1: params[:street_address_1],
        city: params[:city],
        state: params[:state],
        zip: params[:zip],
        title: params[:title],
        lng: params[:lng],
        lat: params[:lat]
        )
      if event.save
          render json: event, status: :create
        else 
          render json: { error: user.errors.full_messages }, status: :unprocessable_entity
      end 
  
  end 

  private

  def event_params 
    params.require(:event).permit(
    :title, 
    :start_time, 
    :end_time, 
    :day, 
    :month, 
    :year, 
    street_address_1, 
    :city, 
    :state, 
    :zip, 
    :lat, 
    :lng)
  end 

end
