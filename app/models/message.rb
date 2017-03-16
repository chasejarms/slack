class Message < ApplicationRecord
  belongs_to :group
  belongs_to :user

  validates :body, presence: true, length: { minimum: 1 }
end
