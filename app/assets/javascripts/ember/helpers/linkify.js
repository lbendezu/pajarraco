Handlebars.registerHelper('linkify', function (property) {
  var text = Ember.getPath(this, property),
      exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,
      linked = '';
  
  linked = text.replace(exp, '<a target="_blank" href="$1">$1</a>');
  return new Handlebars.SafeString(linked);
});
