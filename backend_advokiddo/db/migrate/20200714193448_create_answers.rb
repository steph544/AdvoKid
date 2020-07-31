class CreateAnswers < ActiveRecord::Migration[6.0]
  def change
    create_table :answers do |t|
      t.integer :level_id 
      t.string :info 

      t.timestamps
    end
  end
end
