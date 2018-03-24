class CreateDishes < ActiveRecord::Migration[5.1]
  def change
    create_table :dishes do |t|
      t.integer :views
      t.integer :purchase
      t.boolean :incart
      t.string :dish
      t.float :price
      t.string :category
      t.string :description

      t.timestamps
    end
  end
end
