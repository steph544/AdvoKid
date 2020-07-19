class UserSerializer < ActiveModel::Serializer
  attributes :username, :id, :first_name, :last_name, :email, :children

  has_many :incentives 
  has_many :phrases
  has_many :children
  has_many :orderings
  has_many :levels 
end
