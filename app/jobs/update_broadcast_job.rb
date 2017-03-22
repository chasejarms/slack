class UpdateBroadcastJob < ApplicationJob
  queue_as :default

  def perform(group, subscriptions)
    ActionCable.server.broadcast "update_channel", new_group: render_new_group(group, subscriptions)
  end

  private

  def render_new_group(group, subscriptions)
    ApplicationController.renderer.render(partial: 'api/groups/group_and_subscription', locals: { group: group, subscriptions: subscriptions })
  end


end
