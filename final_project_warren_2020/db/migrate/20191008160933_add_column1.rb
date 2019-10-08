class AddColumn1 < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :lng, :float, :precision=>10, :scale=>6
  end
end
