class User < ApplicationRecord
  has_many :donations 
  has_secure_password
  has_many :events, through: :user_events
end
