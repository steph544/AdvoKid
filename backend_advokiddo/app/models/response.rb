class Response < ApplicationRecord
    belongs_to :child 
    belongs_to :level
end
