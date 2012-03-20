Pajarraco.changeQueryView = Ember.TextField.extend({
  insertNewline: function () {
    var value = this.get('value');

    if (value) {
      Pajarraco.searchTweets.clear();
      Pajarraco.searchTweets.set('query', value);
    }
  }
});
