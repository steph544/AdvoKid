class ChangePhraseTableAddCol < ActiveRecord::Migration[6.0]
  def change
    remove_column :phrases, :level_id, :integer
    remove_column :phrases, :info, :string 

  end
end
