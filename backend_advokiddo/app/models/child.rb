class Child < ApplicationRecord
    belongs_to :user 
    has_many :points 
    has_many :prizes 
    has_many :levels
    has_many :responses
    has_many :recordings 
    has_many :captures 

end
