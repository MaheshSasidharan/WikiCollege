class Univdepts < ActiveRecord::Migration
  def change
    create_table :univdepts do |t|
      t.belongs_to :university, index: true
      t.belongs_to :department, index: true
      t.text :desc
      t.timestamps
    end  
  end
end
