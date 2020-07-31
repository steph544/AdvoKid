class RecordingSerializer < ActiveModel::Serializer
  attributes :id, :level_id, :child_id, :audio 
end
