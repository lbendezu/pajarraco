class TweetsController < ApplicationController
  respond_to :json

  def index
    @tweets = Tweet.all
    respond_with @tweets
  end

  def create
    @tweet = Tweet.new(params[:tweet])
    @tweet.save

    respond_with @tweet
  end

  def destroy
    @tweet = Tweet.find(params[:id])
    @tweet.destroy

    respond_with @tweet
  end
end
