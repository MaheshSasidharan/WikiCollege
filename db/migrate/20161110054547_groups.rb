class Groups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.text :desc
      t.name :courseName
      t.timestamps
    end  
  end
end
