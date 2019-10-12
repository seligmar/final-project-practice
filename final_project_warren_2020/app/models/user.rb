class User < ApplicationRecord
  has_many :donations 
  has_secure_password
  has_many :events, through: :user_events
  validates :username, uniqueness: true
  validates :username, presence: true
  # in the real world the email address and passwords should also be 
  # present and unique but not practical for development 
end
