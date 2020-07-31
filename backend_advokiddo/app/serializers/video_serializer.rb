class VideoSerializer < ActiveModel::Serializer
  attributes :id, :name, :url, :level_id 
end
