class User < ApplicationRecord
  before_validation :ensure_session_token

  validates :password_digest, :username, :session_token, :email, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, :session_token, :email, uniqueness: true

  attr_reader :password

  has_many :subscriptions
  has_many :groups,
    through: :subscriptions,
    source: :group

  def self.find_by_credentials(email, password)
    user = self.find_by_email(email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    token = SecureRandom.urlsafe_base64(16)

    while self.exists?(session_token: token)
      token = SecureRandom.urlsafe_base64(16)
    end

    token
  end

  def ensure_session_token
    self.session_token = SecureRandom.urlsafe_base64(16)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

end
