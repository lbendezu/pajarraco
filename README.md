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

## 2. Creating a Tweet Resource

In this case of the tweets book application, you can generate a
Tweet resource. To do this, enter this command in your terminal:

    rails g resource Tweet text user_nick user_name user_image

Run `rake db:migrate`


Let's create a `TweetSerializer`:

    rails g serializer tweet

and edit:

    class TweetSerializer < ActiveModel::Serializer
      attributes :id, :text, :user_name, :user_nick, :user_image
    end 

**TODO** Why? Serializer?

Edit `app/controllers/tweets_controller.rb`: **TODO:** More explanation

    class TweetsController < ApplicationController
      respond_to :json

      def index
        @tweets = Tweet.all
        respond_with @tweets
      end
    end

Run `rails s` and open <http://localhost:3000/tweets.json> with
the best web browser ever => C.H.R.O.M.E! (**TODO: not funny**).
You will see the next error:

    undefined method `current_user' for #<TweetsController:blahblah>

Serializers know about both a model and the `current_user`, so
you can customize serialization based upon whether a user is 
authorized to see the content. For this demo, we don't need
some kind of authentication, so just create an empty `current_user`
method in `ApplicationController`:

    class ApplicationController < ActionController::Base
      protect_from_forgery

      def current_user
      end
    end

Open again: <http://localhost:3000/tweets.json> and you're
gonna see: `{"tweets":[]}` JSON object.

## 3. Burn your application:

Use this generator to bootstrap your ember app:

    rails g ember_rails:bootstrap

You'll see the following directory structure under `app/assets/javascripts/ember`.

    ember/
       pajarraco.js.coffee
       /models
       /controllers
       /views
       /helpers
       /templates

Open `pajarraco.js.coffee` file:

    #= require_self
    #= require_tree ./models
    #= require_tree ./controllers
    #= require_tree ./views
    #= require_tree ./helpers
    #= require_tree ./templates

    window.Pajarraco = Ember.Application.create()

The last line creates a namespace for your ember application (called Pajarraco),
which is also an instance of `Ember.Application`. It is important that very Ember
app creates an instance of `Ember.Application`, because it is responsible for
routing browser events to your views.

## Ember App Structure:

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
