class Courses < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.text :desc
      t.name :courseName
      t.timestamps
    end  
  end
end
