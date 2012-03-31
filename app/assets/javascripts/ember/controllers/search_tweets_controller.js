Pajarraco.searchTweets = Ember.ArrayController.create({
  content: [],

  refresh: function (query) {
    var content = Pajarraco.Tweet.search(query);
    this.set('content', content);
  }
});
