class Event < ApplicationRecord
  has_many :users, through: :user_event_joint_tables
end
