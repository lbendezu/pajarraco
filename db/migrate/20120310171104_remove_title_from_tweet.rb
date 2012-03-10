class RemoveTitleFromTweet < ActiveRecord::Migration
  def up
    remove_column :tweets, :title
      end

  def down
    add_column :tweets, :title, :string
  end
end
