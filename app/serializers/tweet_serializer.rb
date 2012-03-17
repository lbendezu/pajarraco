class TweetSerializer < ActiveModel::Serializer
  attributes :id, :text, :user_name, :user_nick, :user_image
end
