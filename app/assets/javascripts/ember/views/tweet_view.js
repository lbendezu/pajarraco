Pajarraco.TweetView = Ember.View.extend({
  tagName: 'li',
  classNames: ['tweet'],

  tweet: null,
  mouseDown: function () {
    var tweet = this.get('tweet')

    if (!tweet.get('id')) {
      alert('TODO');
    }
  }
});
