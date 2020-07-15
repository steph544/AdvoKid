class CreateOrderings < ActiveRecord::Migration[6.0]
  def change
    create_table :orderings do |t|
      t.integer :level_id 
      t.integer :user_id 
      t.string :steps

      t.timestamps
    end
  end
end
