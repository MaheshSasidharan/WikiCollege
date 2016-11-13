class Posts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.belongs_to :group, index: true
      t.belongs_to :user, index: true
      t.text :postData
      t.decimal :like
      t.decimal :dislike
      t.boolean :isClosed, :default => false
      t.boolean :isActive, :default => false
      t.datetime :createdTime
      t.timestamps
    end  
  end
end
