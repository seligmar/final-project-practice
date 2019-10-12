# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = [
  { username: "hc123", password: '123456', emailaddress: ''},
  { username: "nc123", password: '123456', emailaddress: ''},
  { username: "ms123", password: '123456', emailaddress: ''},
  { username: "aa123", password: '123456', emailaddress: ''},
  { username: "eh123", password: '123456', emailaddress: ''},
  { username: "rc123", password: '123456', emailaddress: ''},
]

events = [
  { start_time: '06:00:00',
    end_time: '10:00:00', 
    year: 2019,
    month: 10, 
    day: 25,
    street_address_1: '69 Division Ave S', 
    city: 'Grand Rapids', 
    state: 'MI', 
    zip: '49423', 
    lat: 42.960980, 
    lng: -85.670710, 
    title: 'DEBATE WATCH PARTY'
  },

  {
    title: 'KNOCKTOBER', 
    state: 'MI', 
    year: 2019,
    month: 10, 
    day: 31,
    start_time: '01:00:00', 
    end_time: '03:00:00', 
    street_address_1: '1050 Iroquois Dr SE', 
    city: 'Grand Rapids', 
    zip: '49506', 
    lat: 42.944670, 
    lng: -85.633370
  }, 

  { start_time: '10:30:00',
  end_time: '12:00:00', 
  year: 2019,
  month: 10, 
  day: 21,
  street_address_1: '165 Western Ave N', 
  city: 'Saint Paul', 
  state: 'MN', 
  zip: '55102', 
  lat: 44.946289, 
  lng: -93.116524, 
  title: 'MN FOR WARREN: COFFEE HOUR AT NINA\'S'
},

{ start_time: '09:00:00',
end_time: '11:00:00', 
year: 2019,
month: 10, 
day: 25,
street_address_1: '700 W Cliff Dr', 
city: 'Santa Cruz', 
state: 'CA', 
zip: '95060', 
lat: 36.953280, 
lng: -122.040470, 
title: 'WAGS FOR WARREN ON WEST CLIFF WEDNESDAY!'
},

{ start_time: '09:30:00',
end_time: '11:00:00', 
year: 2019,
month: 10, 
day: 30,
street_address_1: '6051 Maple St', 
city: 'Omaha', 
state: 'NE', 
zip: '68104', 
lat: 41.284700, 
lng: -96.006140, 
title: 'WEDNESDAYS FOR WARREN'
},

{ start_time: '18:30:00',
end_time: '21:00:00', 
year: 2019,
month: 10, 
day: 23,
street_address_1: '8346 Leesburg Pike', 
city: 'Tysons', 
state: 'VA', 
zip: '22182', 
lat: 38.921240, 
lng: -77.232300, 
title: 'WARREN HAPPY HOUR MEET AND GREET - TYSONS'
},

{ start_time: '17:30:00',
end_time: '19:00:00', 
year: 2019,
month: 10, 
day: 23,
street_address_1: '421 W 27th St NW', 
city: 'Winston-Salem', 
state: 'NC', 
zip: '27105', 
lat: 36.124180, 
lng: -80.253630, 
title: 'WINSTON-SALEM FAIR CANVASS / FOOD DONATION'
},

{ start_time: '18:00:00',
end_time: '21:00:00', 
year: 2019, 
month: 11, 
day: 03, 
street_address_1: '11 Meserole St', 
city: 'Brooklyn', 
state: 'NY', 
zip: '11206', 
lat: 40.707661, 
lng: -73.949928, 
title: 'NORTH BROOKLYN FOR WARREN PHONE BANK'
},

{ start_time: '18:00:00',
end_time: '20:00:00', 
year: 2019, 
month: 11, 
day: 29, 
street_address_1: '3500 S Cedar St', 
city: 'Lansing', 
state: 'MI', 
zip: '48910', 
lat: 42.694430, 
lng: -84.548060, 
title: 'LANSING FOR WARREN MONTHLY ORGANIZING MEETING'
},

{ start_time: '16:30:00',
end_time: '18:30:00', 
year: 2019, 
month: 10, 
day: 23, 
street_address_1: '2633 Harris St', 
city: 'Eugene', 
state: 'OR', 
zip: '97405', 
lat: 44.029820, 
lng: -123.077420, 
title: 'LANE COUNTY FOR ELIZABETH WARREN - WARREN WEDNESDAY'
},

]


Event.create events
User.create users 