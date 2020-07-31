class OrderingSerializer < ActiveModel::Serializer
  attributes :id, :level_id, :user_id, :steps
end
