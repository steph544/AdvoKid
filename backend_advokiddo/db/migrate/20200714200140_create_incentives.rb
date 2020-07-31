class CreateIncentives < ActiveRecord::Migration[6.0]
  def change
    create_table :incentives do |t|
      t.integer :user_id 
      t.integer :points_required
      t.string :name 

      t.timestamps
    end
  end
end
