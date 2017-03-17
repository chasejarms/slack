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
    if logged_in?
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
end
