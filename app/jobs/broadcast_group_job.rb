class BroadcastGroupJob < ApplicationJob
  queue_as :default

  def perform(message, group)
    ActionCable.server.broadcast "group_channel_#{group.name}", message: render_message(message)
  end

  private

  def render_message(message)
    ApplicationController.renderer.render(partial: 'api/messages/message', locals: { message: message })
  end
end
