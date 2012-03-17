Pajarraco.Tweet = Ember.Object.extend({
  id: null,
  text: '',
  user_nick: '',
  user_name: '',
  user_image: ''
});

Pajarraco.Tweet.all = function () {
  var tweets = [], tweet;

  $.ajax('/tweets.json', {
    dataType: 'json',
    success: function (data) {
      data['tweets'].forEach(function (item) {
        tweet = Pajarraco.Tweet.create({
          id:         item.id,
          text:       item.text,
          user_nick:  item.user_nick,
          user_name:  item.user_name,
          user_image: item.user_image
        });

        tweets.pushObject(tweet);
      });
    },
    error: function (response, status, error) {
      console.error(status, error, response.responseText);
    }
  });

  return tweets;
};
