class Posts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.belongs_to :group, index: true
      #t.belongs_to :user, index: true
      t.text :postData
      t.decimal :like, default: '0'
      t.decimal :dislike, default: '0'
      #t.boolean :isClosed, :default => false
      #t.boolean :isActive, :default => false
      t.timestamps
    end  
  end
end
