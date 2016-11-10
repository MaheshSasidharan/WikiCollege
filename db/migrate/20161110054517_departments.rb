class Departments < ActiveRecord::Migration
  def change
    create_table :departments do |t|
      t.name :deptName
      t.timestamps
    end  
  end
end
