class CreatePoints < ActiveRecord::Migration[6.0]
  def change
    create_table :points do |t|
      t.integer :child_id 
      t.integer :total 
      t.timestamps
    end
  end
end
