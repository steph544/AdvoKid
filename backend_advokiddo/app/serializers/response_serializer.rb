class ResponseSerializer < ActiveModel::Serializer
  attributes :id, :child_id, :level_id
end
