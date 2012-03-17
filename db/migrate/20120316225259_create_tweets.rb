class CreateTweets < ActiveRecord::Migration
  def change
    create_table :tweets do |t|
      t.string :text
      t.string :user_name
      t.string :user_nick
      t.string :user_image

      t.timestamps
    end
  end
end
