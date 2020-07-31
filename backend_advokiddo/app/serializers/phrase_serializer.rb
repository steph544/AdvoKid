class PhraseSerializer < ActiveModel::Serializer
  attributes :id, :phrase_one, :phrase_two, :phrase_three, :user_id, :child_id
end
