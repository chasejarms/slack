class Message < ApplicationRecord
  # after_commit { BroadcastGroupJob.perform_later(self, self.channel) }

  belongs_to :group
  belongs_to :user

  validates :body, presence: true, length: { minimum: 1 }

  def self.formatted_group_messages(group_id)
    messages_from_group = self.all.where('group_id = ?', group_id)
    .order(:created_at).to_a
    # format_messages(messages_from_group)
    messages_from_group
  end

  def self.format_messages(messages)
    current_time = Time.now
    messages.each do |message|
      message.created_at = ((current_time - message.created_at.to_time) / (60 * 24 * 60)).floor.to_s
      puts message.created_at
      puts message.created_at.class
    end
    messages
  end
end
