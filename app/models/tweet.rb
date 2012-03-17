class Tweet < ActiveRecord::Base
  validates_presence_of :text, :user_name, :user_nick, :user_image
end
