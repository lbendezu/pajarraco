Pajarraco.Tweet = Ember.Object.extend({
  id: null,
  text: '',
  user_nick: '',
  user_name: '',
  user_image: '',

  attributes: function () {
    return {
      text: this.get('text'),
      user_nick: this.get('user_nick'),
      user_name: this.get('user_name'),
      user_image: this.get('user_image')
    }
  }.property('text', 'user_nick', 'user_name', 'user_image'),

  save: function () {
    var self = this;

    $.ajax('/tweets.json', {
      type: 'POST',
      data: { tweet: self.get('attributes'), _method: 'POST' },
      dataType: 'text',
      success: function (data, response) {
        data = $.trim(data);
        if (data) {
          data = $.parseJSON(data);
          self.set('id', data['id']);
        }
      },
      error: function (response, status, error) {
        console.error(status, error, response.responseText);
      }
    });

    return self;
  }
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
