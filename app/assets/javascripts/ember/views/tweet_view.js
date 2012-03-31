Pajarraco.TweetView = Ember.View.extend({

  doubleClick: function () {
    var tweet = this.get('tweet');

    if (!tweet.get('id')) {
      Pajarraco.savedTweetsController.newTweet(tweet);
    } else {
      Pajarraco.savedTweetsController.destroyTweet(tweet);
    }
  }

});
