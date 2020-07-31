class ChangeRecordingsTable < ActiveRecord::Migration[6.0]
  def change
    add_column :recordings, :audio, :string
  end
end
