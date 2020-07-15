class CreateCaptures < ActiveRecord::Migration[6.0]
  def change
    create_table :captures do |t|
      t.string :url 
      t.integer :level_id 
      t.integer :child_id 

      t.timestamps
    end
  end
end
