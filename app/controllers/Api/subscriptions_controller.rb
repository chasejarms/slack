class Api::SubscriptionsController < ApplicationController
  def index
    if logged_in?
      @subscriptions = Subscription.all.where("user_id = ?", current_user.id)
      render 'api/subscriptions/index'
    else
      render json: ["You must be logged in to see your groups"], status: 401
    end
  end
end
