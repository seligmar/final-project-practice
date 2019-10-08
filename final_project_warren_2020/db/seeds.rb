# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = [
  { username: "hc123", password: '123456'},
  { username: "nc123", password: '123456'},
  { username: "ms123", password: '123456'},
  { username: "aa123", password: '123456'},
  { username: "eh123", password: '123456'},
  { username: "rc123", password: '123456'},
]

events = [
  { start_time: 600,
    end_time: 1000, 
    date: 10/15/2019, 
    street_address_1: '69 Division Ave S', 
    city: 'Grand Rapids', 
    state: 'MI', 
    zip: '49423', 
    lat: 42.960980, 
    lng: -85.670710, 
    title: 'Debate Watch Party'
  },

  {
    title: 'Knocktober', 
    state: 'MI', 
    start_time: 100, 
    end_time: 300, 
    street_address_1: '1050 Iroquois Dr SE', 
    city: 'Grand Rapids', 
    zip: '49506', 
    lat: 42.944670, 
    lng: -85.633370
  }
]


Event.create events 