Pajarraco.Tweet = DS.Model.extend({
  text:      DS.attr('string'),
  userNick:  DS.attr('string'),
  userName:  DS.attr('string'),
  userImage: DS.attr('string'),

  twitterUserNick: function () {
    return '@' + this.get('userNick');
  }.property('userNick').cacheable()
});
