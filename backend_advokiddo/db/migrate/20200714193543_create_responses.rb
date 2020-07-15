class CreateResponses < ActiveRecord::Migration[6.0]
  def change
    create_table :responses do |t|
      t.integer :child_id 
      t.integer :level_id 

      t.timestamps
    end
  end
end
