class TweetsController < ApplicationController
  def index
    render json: Tweet.all
  end
end
