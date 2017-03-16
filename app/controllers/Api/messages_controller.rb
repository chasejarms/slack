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
end
