Pajarraco.TweetParser = function (text) {
  this.text = text,

  this.getText = function () {
    return this.text;
  },

  this.parseURL = function () {
    var exp = /[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&amp;\?\/.=]+/g;
    this.text = this.getText().replace(exp, function(url) {
      return url.link(url);
    });

    return this;
  },

  this.parseUsername = function () {
    this.text = this.getText().replace(/[@]+[A-Za-z0-9-_]+/g, function(u) {
      var username = u.replace("@","")
      return u.link("http://twitter.com/"+username);
    });

    return this;
  },

  this.parseHashtag = function () {
    this.text = this.getText().replace(/[#]+[A-Za-z0-9-_]+/g, function(t) {
      var tag = t.replace("#","%23")
      return t.link("http://search.twitter.com/search?q="+tag);
    });

    return this;
  }
};

Pajarraco.TweetSearch = Ember.Mixin.create({
  searchTweets: function (query, callback) {
    var tweets = [];

    $.getJSON('http://search.twitter.com/search.json?q=' + query + '&callback=?',
      function (data) {
        var tweetObject, item,
            i, len = data.results.length;

        for (i = 0; i < len; i++) {
          item = data.results[i];

          tweetObject = callback(item);

          tweets.unshiftObject(tweetObject);
        }
      }
    );

    return tweets;
  }
});
