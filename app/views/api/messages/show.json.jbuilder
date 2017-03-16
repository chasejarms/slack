json.extract! @message, :id, :user_id, :group_id, :body
json.user @message.user.username
json.created_at evaluate_time(@message.created_at)
