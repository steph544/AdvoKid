class ChangeChildTableCols < ActiveRecord::Migration[6.0]
  def change
    add_column :children, :first_name, :string
    rename_column :children, :name, :last_name 
  end
end
