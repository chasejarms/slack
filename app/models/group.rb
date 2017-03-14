class Group < ApplicationRecord
  has_many :subscriptions
  has_many :users,
    through: :subscriptions,
    source: :user

  def self.subscribed_direct_messages(user_id)
    Group.where('channel = ?', false)
    .joins(:users)
    .where('users.id = ?', user_id)
  end

  # what should I add to this to sanitize the parameters

  def self.all_channels_with_subscriptions(user_id)
    Group.where('channel = ?', true)
    .joins(:users)
    .where('users.id = ?', user_id)
  end
end
