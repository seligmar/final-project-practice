class CreateUserEventJointTable < ActiveRecord::Migration[5.2]
  def change
    create_table :user_event_joint_tables do |t|
      t.string :users
      t.string :events
    end
  end
end
