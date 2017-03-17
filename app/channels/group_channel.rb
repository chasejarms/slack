class GroupChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "group_#{params[:groupName]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
