class CreateEstablishments < ActiveRecord::Migration[6.0]
  def change
    create_table :establishments do |t|
      t.string :title
      t.text :review

      t.timestamps
    end
  end
end
