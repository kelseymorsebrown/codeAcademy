class CreateSignups < ActiveRecord::Migration[8.0]
  def change
    create_table :signups do |t|
      t.text :email
      t.timestamps
    end
  end
end
