class Departments < ActiveRecord::Migration
  def change
    create_table :departments do |t|
      t.string :deptName
      t.timestamps
    end  
  end
end
