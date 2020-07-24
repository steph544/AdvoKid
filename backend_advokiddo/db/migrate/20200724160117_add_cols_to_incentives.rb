class AddColsToIncentives < ActiveRecord::Migration[6.0]
  def change
    add_column :incentives, :prizeone, :string
    add_column :incentives, :prizetwo, :string
    add_column :incentives, :prizethree, :string
    add_column :incentives, :prizefour, :string
    add_column :incentives, :prizefive, :string
    add_column :incentives, :prizesix, :string
    remove_column :incentives, :name, :string 
    add_column :incentives, :child_id, :integer
  end
end
