class ChildSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :first_name, :last_name, :age, :image 
  has_many :points 
  has_many :prizes 
  has_many :levels
  has_many :responses
  has_many :recordings 
  has_many :captures 
end
