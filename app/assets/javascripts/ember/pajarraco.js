#= require_self
#= require_tree ./lib
#= require_tree ./models
#= require_tree ./controllers
#= require_tree ./views
#= require_tree ./helpers
#= require_tree ./templates

Pajarraco = Ember.Application.create({
  store: DS.Store.create({
    adapter:  DS.RESTAdapter.create({ bulkCommit: false }),
    revision: 4
  }),

  ready: function () {
    Pajarraco.savedTweets.loadTweets();
  }
});
