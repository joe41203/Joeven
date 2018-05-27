class CreateCosmetics < ActiveRecord::Migration[5.2]
  def change
    create_table :cosmetics do |t|
      t.string :name, null: false, comment: 'Name'
      t.timestamps
    end
    add_index :cosmetics, :name
  end
end
