class PrizeSerializer < ActiveModel::Serializer
  attributes :id, :child_id, :name, :points_needed 
end
