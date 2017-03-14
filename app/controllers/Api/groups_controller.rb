class Api::GroupsController < ApplicationController

  def index
    if logged_in?
      @channels = Group.all_channels_with_subscriptions(current_user.id).to_a
      @direct_messages = Group.subscribed_direct_messages(current_user.id).to_a
      render 'api/groups/index'
    else
      render json: ["Please log in to see groups"], status: 401
    end
  end

  def create
  end
end
