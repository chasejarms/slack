formatted_array = subscriptions.map { |subscription| subscription.user_id }

json.set! :group do
  json.extract! group, :id, :name, :channel
end
json.subscriptions formatted_array
