Pajarraco.savedTweets = Ember.ArrayController.create({
  findAll: function () {
    this.set('content', Pajarraco.Tweet.all());
  }
});
