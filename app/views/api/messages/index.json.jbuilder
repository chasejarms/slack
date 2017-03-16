json.array! @messages do |message|
  json.extract! message, :id, :user_id, :group_id, :body, :created_at
  json.user message.user.username
end
