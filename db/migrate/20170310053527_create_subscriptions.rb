class CreateSubscriptions < ActiveRecord::Migration[5.0]
  def change
    create_table :subscriptions do |t|
      t.integer :user_id, null: false
      t.integer :group_id, null: false
      t.timestamps
    end
    add_index :subscriptions, :user_id
    add_index :subscriptions, :group_id
    add_index :subscriptions, [:user_id, :group_id], unique: true
  end
end
