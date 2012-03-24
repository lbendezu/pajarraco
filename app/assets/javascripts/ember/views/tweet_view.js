Pajarraco.TweetView = Ember.View.extend({
  tweet: null,

  doubleClick: function () {
    var tweet = this.get('tweet')

    if (!tweet.get('id')) {
      tweet.save();
      Pajarraco.searchTweets.removeObject(tweet);
      Pajarraco.savedTweets.unshiftObject(tweet);
    } else {
      tweet.destroy();
      Pajarraco.savedTweets.removeObject(tweet);
      Pajarraco.searchTweets.unshiftObject(tweet);
    }
  }
});
