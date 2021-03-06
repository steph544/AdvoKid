class LevelSerializer < ActiveModel::Serializer
  attributes :id, :name, :child_id

    has_many :recordings 
    has_many :captures
    has_many :recordings 
    has_many :videos 
    has_many :answers
    has_many :orderings
    has_many :responses 
end
