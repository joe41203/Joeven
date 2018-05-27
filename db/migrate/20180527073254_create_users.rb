class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name, null: false, comment: 'First Name'
      t.string :last_name, null: false, comment: 'Last Name'
      t.integer :gender, null: false, comment: 'Gender'
      t.string :email, null: false, comment: 'Email'
      t.timestamps
    end
    add_index :users, :first_name
    add_index :users, :last_name
    add_index :users, :email
  end
end
