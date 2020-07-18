class CreateImages < ActiveRecord::Migration[6.0]
  def change
    create_table :images do |t|
      t.string :screen_shot 
      t.integer :user_id

      t.timestamps
    end
  end
end
