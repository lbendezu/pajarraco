Handlebars.registerHelper('twittify', function (property) {
  var text = Ember.getPath(this, property),
      twitterParser = new Pajarraco.TweetParser(text);

  return new Handlebars.SafeString(
    twitterParser.parseURL()
                 .parseUsername()
                 .parseHashtag()
                 .getText()
  );
});
