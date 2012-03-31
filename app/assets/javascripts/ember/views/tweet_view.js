Pajarraco.TweetView = Ember.View.extend({

  doubleClick: function () {
    var tweet = this.get('tweet');

    if (!tweet.get('id')) {
      Pajarraco.savedTweets.newTweet(tweet);
    } else {
      Pajarraco.savedTweets.destroyTweet(tweet);
    }
  }

});
