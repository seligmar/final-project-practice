class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.time :start_time
      t.time :end_time
      t.integer :year
      t.integer :month
      t.integer :day
      t.string :street_address_1
      t.string :street_address_2
      t.string :city
      t.string :state
      t.string :zip
      t.integer :lat 
      t.integer :lng

      t.timestamps
    end
  end
end
