Pajarraco.TweetParser = {

  parseUrl: function (text) {
    var exp = /[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&amp;\?\/.=]+/g;

    return text.replace(exp, function (url) {
        return url.link(url);
    });
  },

  parseUser: function (text) {
    var exp = /[@]+[A-Za-z0-9-_]+/g;

    return text.replace(exp, function (user) {
      var username = user.replace('@', '');

      return user.link('http://twitter.com/' + username);
    });
  },

  parseHashtag: function (text) {
    var exp = /[#]+[A-Za-z0-9-_]+/g;

    return text.replace(exp, function (tag) {
      var hashtag = tag.replace("#","%23");

      return tag.link("http://search.twitter.com/search?q=" + hashtag);
    });
  }
};
