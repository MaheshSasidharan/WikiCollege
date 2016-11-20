class Groups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.belongs_to :university, index: true
      #t.belongs_to :user, index: true
      t.text :desc
      t.string :groupName
      t.timestamps
    end  
  end
end
