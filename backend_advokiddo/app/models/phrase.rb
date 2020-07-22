class Phrase < ApplicationRecord
    belongs_to :user 
    belongs_to :child
end
