class DropPhrases < ActiveRecord::Migration[6.0]
  def change
    drop_table :phrases
  end
end
