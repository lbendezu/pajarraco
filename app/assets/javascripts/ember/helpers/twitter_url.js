Handlebars.registerHelper('twitter_url', function (property) {
  var value = Ember.getPath(this, property),
      link = '<a href="http://www.twitter.com/' + value + '">@' + value + '</a>'
  return new Handlebars.SafeString(link);
});
