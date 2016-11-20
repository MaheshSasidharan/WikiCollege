class Comments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.belongs_to :post, index: true
      #t.belongs_to :user, index: true
      t.text :commentData
      t.decimal :like
      t.decimal :dislike
      #t.boolean :isActive, :default => false
      #t.datetime :createdTime
      t.timestamps
    end  
  end
end
