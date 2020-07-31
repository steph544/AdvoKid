class CreatePhrases < ActiveRecord::Migration[6.0]
  def change
    create_table :phrases do |t|
      t.integer :level_id 
      t.integer :user_id 
      t.string :info 

      t.timestamps
    end
  end
end
