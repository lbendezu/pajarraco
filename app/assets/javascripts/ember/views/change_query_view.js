Pajarraco.changeQueryView = Ember.TextField.extend({
  insertNewline: function () {
    var query = this.get('value');

    if (query) {
      Pajarraco.searchTweets.clear();
      Pajarraco.searchTweets.refresh(query);
    }
  }
});
