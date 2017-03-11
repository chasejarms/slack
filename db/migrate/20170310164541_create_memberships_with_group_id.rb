class CreateMembershipsWithGroupId < ActiveRecord::Migration[5.0]
  def change
    create_table :memberships do |t|
      t.integer :user_id, null: false
      t.integer :messageable_id, null: false
    end
    rename_column :messages, :group_id, :messageable_id
  end

end
