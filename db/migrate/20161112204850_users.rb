class Users < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :user_id
      t.string :email
      t.string :password_digest
      t.decimal :reputationPoints
      t.datetime :createdTime
      t.timestamps null: false
    end  
  end
end
