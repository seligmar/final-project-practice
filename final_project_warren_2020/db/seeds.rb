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

User.create users