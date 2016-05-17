class RemoveColumnisadminandtypeFromUser < ActiveRecord::Migration
  def change
    remove_column :users, :isadmin, :boolean
  end
end
