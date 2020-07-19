class Level < ApplicationRecord
    has_many :recordings 
    belongs_to :child 
    has_many :captures
    has_many :recordings 
    has_many :phrases 
    has_many :users, through: :phrases 
    has_many :videos 
    has_many :answers
    has_many :orderings
    has_many :responses 
end
