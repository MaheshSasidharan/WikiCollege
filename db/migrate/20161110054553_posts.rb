class Posts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.number :likes
      t.number :dislikes
      t.boolean :isClosed, :default => false
      t.boolean :isActive, :default => false
      t.datetime :updateTime
      t.timestamps
    end  
  end
end
