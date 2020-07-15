class CreatePrizes < ActiveRecord::Migration[6.0]
  def change
    create_table :prizes do |t|
      t.integer :child_id
      t.string :name 
      t.integer :points_needed  

      t.timestamps
    end
  end
end
