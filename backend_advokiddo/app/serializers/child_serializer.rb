class ChildSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :age

  has_many :points 
  has_many :prizes 
  has_many :levels
  has_many :responses
  has_many :recordings 
  has_many :captures 
end
