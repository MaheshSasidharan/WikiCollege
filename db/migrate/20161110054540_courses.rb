class Courses < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.belongs_to :univdept, index: true
      t.text :desc
      t.string :courseName
      t.timestamps
    end  
  end
end
