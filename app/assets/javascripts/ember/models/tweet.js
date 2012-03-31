Pajarraco.Tweet = DS.Model.extend({
  text:      DS.attr('string'),
  userNick:  DS.attr('string'),
  userName:  DS.attr('string'),
  userImage: DS.attr('string'),

  twitterUserNick: function () {
    return '@' + this.get('userNick');
  }.property('userNick').cacheable()
});

Pajarraco.Tweet.search = function (query) {
  var self   = this,
      tweet  = null,
      item   = null,
      tweets = [],
      i, len;

  $.getJSON(
    'http://search.twitter.com/search.json?q=' + query + '&callback=?',
    function (data) {
      len = data.results.length;
      for (i = 0; i < len; i++) {
        item  = data.results[i];

        tweet = Pajarraco.Tweet._create({
          text:      item.text,
          userNick:  item.from_user,
          userName:  item.from_user_name,
          userImage: item.profile_image_url
        });

        tweets.unshiftObject(tweet);
      }
    }
  );

  return tweets;
};
