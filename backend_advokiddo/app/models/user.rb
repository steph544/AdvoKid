class User < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: { case_sensitive: false }
    validates :first_name, presence: true 
    validates :last_name, presence: true 
    validates :email, presence: true, uniqueness: true 

    has_many :incentives
    has_many :phrases
    has_many :children 
    has_many :orderings 
    has_many :levels, through: :phrases 
end
