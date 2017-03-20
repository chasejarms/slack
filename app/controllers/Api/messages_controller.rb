class Api::MessagesController < ApplicationController
  def index
    if logged_in?
      group_id = Group.where('name = ?', params[:groupName])
      .order(created_at: :desc).to_a[0].id
      @messages = Message.formatted_group_messages(group_id)
      render 'api/messages/index'
    else
      render json: ["You must be logged in to view messages"], status: 401
    end
  end

  def create
    if logged_in? && is_subscribed_to_group?
      @message = Message.new(message_params)
      @message.user_id = current_user.id
      if @message.save
        # is this a good endpoint for this request?

        render "api/messages/show"
      else
        render json: @message.errors.full_messages, status: 422
      end
    else
      render json: ["You must be logged in to create messages"], status: 401
    end
  end

  private

  def message_params
    params.require(:message).permit(:group_id, :body)
  end

  def is_subscribed_to_group?
    potential_subscription = Subscription.where(
    user_id: current_user.id,
    group_id: params[:message][:group_id])

    # will return false if the hacker is not subscribed to a particular group
    # and still tries to post a message to that group with an ajax request

    !potential_subscription.empty?
  end
end
