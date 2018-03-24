class CreateCarts < ActiveRecord::Migration[5.1]
  def change
    create_table :carts do |t|
      t.User :belongs_to

      t.timestamps
    end
  end
end
