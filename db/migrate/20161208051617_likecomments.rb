class Likecomments < ActiveRecord::Migration
  def change
     create_table :likecomments do |t|
      t.boolean :like
      t.integer :user_id
      t.integer :comment_id
      t.timestamps
    end
  end
end
