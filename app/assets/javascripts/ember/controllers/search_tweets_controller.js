Pajarraco.searchTweets = Ember.ArrayController.create({
  content: [],
  query: null,

  refresh: function () {
    var query = this.get('query');
    this.clear();
    this.set('content', Pajarraco.Tweet.search(query));
  }.observes('query')
});
