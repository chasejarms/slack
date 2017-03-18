class Group < ApplicationRecord
  has_many :subscriptions
  has_many :users,
    through: :subscriptions,
    source: :user

  validates :name, uniqueness: true
  validates :name, length: { minimum: 1 }

  def self.subscribed_direct_messages(user_id)
    Group.where('channel = ?', false)
    .joins(:users)
    .where('users.id = ?', user_id)
  end

  def self.all_channels
    Group.where('channel = ?', true)
  end
end
