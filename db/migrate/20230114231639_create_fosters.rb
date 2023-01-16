class CreateFosters < ActiveRecord::Migration[7.0]
  def change
    create_table :fosters do |t|
      t.string :name
      t.string :breed
      t.string :age
      t.boolean :current
      t.boolean :wishlist
      t.string :bio
      t.string :cover_photo

      t.timestamps
    end
  end
end
