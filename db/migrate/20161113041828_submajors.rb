class Submajors < ActiveRecord::Migration
  def change
    create_table :submajors do |t|
      t.belongs_to :univdept, index: true
      t.text :desc
      t.string :majorName
      t.timestamps
    end 
  end
end
