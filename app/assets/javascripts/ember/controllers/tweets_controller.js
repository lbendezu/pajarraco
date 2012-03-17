Pajarraco.savedTweets = Ember.ArrayController.create({
  content: [],
  
  findAll: function () {
    this.set('content', Pajarraco.Tweet.all());
  }
});
