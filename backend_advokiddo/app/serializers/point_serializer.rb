class PointSerializer < ActiveModel::Serializer
  attributes :id, :child_id, :total
end
