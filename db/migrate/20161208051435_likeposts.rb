class Likeposts < ActiveRecord::Migration
  def change
     create_table :likeposts do |t|
      t.boolean :like
      t.integer :user_id
      t.integer :post_id
      t.timestamps
    end
  end
end
