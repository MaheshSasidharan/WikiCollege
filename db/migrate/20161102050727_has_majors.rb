class HasMajors < ActiveRecord::Migration
  def change
    create_table :has_majors do |t|
      t.references 'majors', index: true
      t.references 'universities', index: true
      #t.timestamps
    end
  end
end
