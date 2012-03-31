Pajarraco.changeQueryView = Ember.TextField.extend({
  insertNewline: function () {
    var query = this.get('value');

    if (query) {
      Pajarraco.searchTweetsController.clear();
      Pajarraco.searchTweetsController.refresh(query);
    }
  }
});
