current_time = Time.now

evaluate_time = Proc.new do |created_at|
  time = (current_time.yday - created_at.to_time.yday)
  time == 0 ? "Today" : time == 1 ? "Yesterday" : "#{time} days ago"
end

json.array! @messages do |message|
  json.extract! message, :id, :user_id, :group_id, :body
  json.created_at evaluate_time.call(message.created_at)
  json.user message.user.username
end
