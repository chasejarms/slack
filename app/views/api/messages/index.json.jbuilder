json.array! @messages do |message|
  json.extract! message, :id, :user_id, :group_id, :body
  json.created_at evaluate_time(message.created_at)
  json.user message.user.username
end
