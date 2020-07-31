class CaptureSerializer < ActiveModel::Serializer
  attributes :id, :level_id, :child_id, :url
end
