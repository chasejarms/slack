class Api::SubscriptionsController < ApplicationController
  def index
    if logged_in?
      @subscriptions = Subscription.all.where("user_id = ?", current_user.id)
      render 'api/subscriptions/index'
    else
      render json: ["You must be logged in to see your groups"], status: 401
    end
  end

  def create
    @subscription = Subscription.new(subscription_params)
    @subscription.user_id = current_user.id
    if @subscription.save
      render 'api/subscriptions/show'
    else
      render json: @subscription.errors.full_messages, status: 422
    end
  end

  private

  def subscription_params
    params.require(:subscription).permit(:group_id)
  end
end
