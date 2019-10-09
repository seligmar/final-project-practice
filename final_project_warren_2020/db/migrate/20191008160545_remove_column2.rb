class RemoveColumn2 < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :lng 
  end
end
