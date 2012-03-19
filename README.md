# Pajarraco

**TODO: Introduction**

* Ember: >= 0.9.4
* Rails: >= 3.2

## 1. Setting up the Application:

**TODO:** 

    rails new pajarraco && cd pajarraco

Edit `Gemfile` to add the following gems:

    gem "active_model_serializers", git: "git://github.com/josevalim/active_model_serializers.git"
    gem "ember-rails", git: "http://github.com/emberjs/ember-rails"

Run `bundle install`.

**TODO:** why those gems?

## Ember App Strucutre:

    app/assets/javascripts/ember
      pajarraco.js
      models/
        tweet.js
      controllers/
        search_tweets_controller.js
        saved_tweets_controller.js
      views/
        change_query_view.js
        tweet_view.js
        tweets_view.js
      template/
        tweets.handlebars
      helpers/
        linkify.js
        twitter_url.js
