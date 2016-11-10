class UnivDepts < ActiveRecord::Migration
  def change
    create_table :univDepts do |t|
      t.text :desc
    end  
  end
end
