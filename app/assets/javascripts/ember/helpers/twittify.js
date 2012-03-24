Handlebars.registerHelper('twittify', function (property) {
  var text = Ember.getPath(this, property);
  
  text = Pajarraco.TweetParser.parseUrl(text);
  text = Pajarraco.TweetParser.parseUser(text);
  text = Pajarraco.TweetParser.parseHashtag(text);
  return new Handlebars.SafeString(text);
});
