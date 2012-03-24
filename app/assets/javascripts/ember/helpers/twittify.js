Handlebars.registerHelper('twittify', function (property) {
  var text = Ember.getPath(this, property);
  
  text = text.parseURL()
             .parseUsername()
             .parseHashtag();

  return new Handlebars.SafeString(text);
});
