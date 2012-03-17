Tweet.delete_all

if Rails.env.development?
  (1..10).each do
    Tweet.create(
      text:       "nice talk @dbrady! #mwrc",
      user_nick:  "frodsan",
      user_name:  "Francesco Rodriguez",
      user_image: "https://twimg0-a.akamaihd.net/profile_images/1850899605/Photo_on_2-24-12_at_1.05_PM.jpg"
    )
  end
end
