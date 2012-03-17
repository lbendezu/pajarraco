Pajarraco.changeQueryView = Ember.TextField.extend({
  insertNewline: function () {
    var value = this.get('value');

    if (value) {
      Pajarraco.searchTweets.set('content', []);
      Pajarraco.searchTweets.set('query', value);
    }
  }
});
