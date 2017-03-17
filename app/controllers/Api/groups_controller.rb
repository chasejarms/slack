class Api::GroupsController < ApplicationController

  def index
    if logged_in?
      @channels = Group.all_channels_with_subscriptions(current_user.id).to_a
      @direct_messages = Group.subscribed_direct_messages(current_user.id).to_a
      render 'api/groups/index'
    else
      render json: ["Please log in to see your groups"], status: 401
    end
  end

  def create
    @group = Group.new(group_params)
    # put group user id as a bonus feature
    @group.channel = false if params[:group][:channel].nil?
    if @group.save
      subscribe_creator(@group.id)
      slackbot_message(@group.id)
      render 'api/groups/show'
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  private

  def group_params
    params.require(:group).permit(:name, :channel)
  end

  def subscribe_creator(group_id)
    Subscription.create(user_id: current_user.id, group_id: group_id)
  end

  def slackbot_messages(group_id, channel)
    correct_message = channel ? "channel" : "direct message"
    Message.create(user_id: 1, group_id: group_id, body: "This is the beginning of your #{correct_message}.")
  end
end
