class IncentiveSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :points_required, :prizeone, :prizetwo, :prizethree, :prizefour, :prizefive, :prizesix, :child_id
end
