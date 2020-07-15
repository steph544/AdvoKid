class CreateChildren < ActiveRecord::Migration[6.0]
  def change
    create_table :children do |t|
      t.string :user_id 
      t.string :name 
      t.integer :age 

      t.timestamps
    end
  end
end
