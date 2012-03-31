Pajarraco.searchTweetsController = Ember.ArrayController.create({

  refresh: function (query) {
    var content = Pajarraco.Tweet.search(query);
    this.set('content', content);
  }

});
