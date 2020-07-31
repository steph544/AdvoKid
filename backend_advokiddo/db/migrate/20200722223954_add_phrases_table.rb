class AddPhrasesTable < ActiveRecord::Migration[6.0]
  create_table :phrases do |t|
    t.integer :child_id
    t.integer :user_id 
    t.string :phrase_one
    t.string :phrase_two
    t.string :phrase_three

    t.timestamps
  end
end
