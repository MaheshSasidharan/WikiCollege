class Universities < ActiveRecord::Migration
  def change
    create_table :universities do |t|
      t.string :name
      t.string :location
      t.integer :rank
      t.string :overview
      t.integer :year
      t.string :endorsement
      t.string :climate
      t.timestamps
    end
  end
end
