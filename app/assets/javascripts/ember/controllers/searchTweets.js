Pajarraco.searchTweets = Ember.ArrayController.create({
  content: [],
  query: null,

  refresh: function () {
    var self  = this,
        tweet = null,
        item  = null,
        query = this.get('query');

    $.getJSON(
      'http://search.twitter.com/search.json?q=' + query + '&callback=?',
      function (data) {
        for (var i = 0, len = data.results.length; i < len; i += 1) {
          item  = data.results[i];
          tweet = Pajarraco.Tweet.create({
            text:       item.text,
            user_nick:  item.from_user,
            user_name:  item.from_user_name,
            user_image: item.profile_image_url
          }); 
          self.unshiftObject(tweet);
        }
      }
    );
  }.observes('query')
});
