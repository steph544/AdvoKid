class ChangeChildTable < ActiveRecord::Migration[6.0]
  def change
    add_column :children, :image, :string
  end
end
