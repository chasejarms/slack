class BroadcastGroupJob < ApplicationJob
  queue_as :default

  def perform(message, channel)
    # Do something later
    message = Api::Message.render 'api/messages/show', locals: { message: message }
    ActionCable.server.broadcast("group_#{params[:groupName]}", message: JSON.parse(message) }
  end
end
