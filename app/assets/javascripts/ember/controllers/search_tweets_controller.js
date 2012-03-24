Pajarraco.searchTweets = Ember.ArrayController.create({
  refresh: function (query) {
    this.set('content', Pajarraco.Tweet.search(query));
  }
});
