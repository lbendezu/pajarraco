Pajarraco.savedTweetsController = Ember.ArrayController.create({

  loadTweets: function () {
    var content = Pajarraco.Tweet.find();
    this.set('content', content);
  },

  newTweet: function (tweet) {
    Pajarraco.Tweet.createRecord(tweet);
    Pajarraco.store.commit();
  },

  destroyTweet: function (tweet) {
    tweet.deleteRecord();
    Pajarraco.store.commit();
  }

});
