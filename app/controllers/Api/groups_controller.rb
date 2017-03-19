class Api::GroupsController < ApplicationController

  def index
    if logged_in?
      @channels = Group.all_channels.to_a
      @direct_messages = Group.subscribed_direct_messages(current_user.id).to_a
      render 'api/groups/index'
    else
      render json: ["Please log in to see your groups"], status: 401
    end
  end

  def create
    @group = Group.new(group_params)
    # workaround for validation failing if we validate presence of a false set value
    @group.channel = params[:group][:channel] == "true"


    # special laundry list of things to do if user is creating a direct message
    unless @group.channel

      # setting direct message name with subscribed users (max 7)
      direct_message_users = params[:group][:users]
      @group.name = set_direct_message_name(direct_message_users)

    end

    if @group.save
      # subscribe all user if we're creating a direct message
      subscribe_users(direct_message_users, @group.id) unless @group.channel

      subscribe_creator(@group.id)
      slackbot_message(@group.id, @group.channel)

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

  def slackbot_message(group_id, channel)
    correct_message = channel ? "channel" : "direct message"
    Message.create(user_id: 1, group_id: group_id, body: "This is the beginning of your #{correct_message}.")
  end

  def subscribe_users(users, group_id)
    users = users.take(7) if users.count > 7
    users.each do |user|
      user_id = User.find_by_username(user).id
      Subscription.create(user_id: user_id, group_id: group_id)
    end
  end

  def set_direct_message_name(users)
    sorted_users = users.sort.join(",")
    user_that_created_direct_message = current_user.username

    "#{sorted_users},#{user_that_created_direct_message}"
  end
end
