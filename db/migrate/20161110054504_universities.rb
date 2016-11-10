class Universities < ActiveRecord::Migration
  def change
    create_table :universities do |t|
      t.text :desc
      t.name :city
      t.name :state
      t.string :zip
      t.name :name
      t.string :type
      t.number :rank
      t.decimal :acceptanceRate
      t.number :enrollment
      t.timestamps
    end  
  end
end
