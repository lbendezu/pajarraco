Pajarraco.searchTweets = Ember.ArrayController.create({
  refresh: function (query) {
    this.clear();
    this.set('content', Pajarraco.Tweet.search(query));
  }
});
