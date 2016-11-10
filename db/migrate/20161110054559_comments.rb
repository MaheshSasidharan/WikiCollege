class Comments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.number :likes
      t.number :dislikes
      t.boolean :isActive, :default => false
      t.datetime :updateTime
      t.timestamps
    end  
  end
end
