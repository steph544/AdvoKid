class ChangeImageTableAddChild < ActiveRecord::Migration[6.0]
  def change
    add_column :images, :child_id, :integer
  end
end
