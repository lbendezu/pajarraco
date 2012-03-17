Pajarraco.tweetsController = Ember.ArrayController.create({
  content: [],
  
  findAll: function () {
    this.set('content', Pajarraco.Tweet.all());
  }
});
