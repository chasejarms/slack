class CreateMemberships < ActiveRecord::Migration[5.0]
  def change
    create_table :memberships do |t|
      t.integer :user_id, null: false
      t.integer :direct_message_id, null: false
      t.timestamps
    end
    add_index :memberships, :user_id
    add_index :memberships, :direct_message_id
    add_index :memberships, [:user_id, :direct_message_id], unique: true
  end
end
