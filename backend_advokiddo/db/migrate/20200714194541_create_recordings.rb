class CreateRecordings < ActiveRecord::Migration[6.0]
  def change
    create_table :recordings do |t|
      t.integer :level_id 
      t.integer :child_id

      t.timestamps
    end
  end
end
