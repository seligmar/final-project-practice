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

  private

end
