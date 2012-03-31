Pajarraco.searchTweetsController = Ember.ArrayController.create(
  Pajarraco.TweetSearch, {

  refresh: function (query) {
    var content = this.searchTweets(query, function (item) {
      var tweet = Pajarraco.Tweet._create({
        text:      item.text,
        userNick:  item.from_user,
        userName:  item.from_user_name,
        userImage: item.profile_image_url
      });

      return tweet;
    });
    this.set('content', content);
  }

});
