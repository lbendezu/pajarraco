Handlebars.registerHelper('twittify', function (property) {
  var text = Ember.getPath(this, property);
  
  var twitterParser = new TwitterParser(text);

  return new Handlebars.SafeString(
    twitterParser.parseURL()
                 .parseUsername()
                 .parseHashtag()
                 .getText()
  );
});
