class IncentiveSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :points_required, :name 
end
