Pajarraco.TweetView = Ember.View.extend({
  tweet: null,

  doubleClick: function () {
    var tweet = this.get('tweet');

    if (!tweet.get('id')) {
      Pajarraco.savedTweets.newTweet(tweet);
      Pajarraco.searchTweets.removeObject(tweet);
    } else {
      Pajarraco.savedTweets.destroyTweet(tweet);
      Pajarraco.searchTweets.unshiftObject(tweet);
    }
  }
});
