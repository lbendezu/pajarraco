Pajarraco.TweetView = Ember.View.extend({
  tagName: 'li',
  classNames: ['tweet'],

  tweet: null,

  doubleClick: function () {
    var tweet = this.get('tweet')

    if (!tweet.get('id')) {
      Pajarraco.searchTweets.removeObject(tweet);
      Pajarraco.savedTweets.insertAt(0, tweet);
    }
  }
});
