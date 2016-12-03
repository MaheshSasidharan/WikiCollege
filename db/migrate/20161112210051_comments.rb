class Comments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.belongs_to :post, index: true
      t.belongs_to :user, index: true
      t.text :commentData
      t.decimal :like, default: '0'
      t.decimal :dislike, default: '0'
      t.boolean :isActive, :default => false
      t.timestamps
    end  
  end
end
