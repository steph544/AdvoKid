class ChangePrizesRemoveCol < ActiveRecord::Migration[6.0]
  def change
    remove_column :prizes, :points_needed, :integer
  end
end
