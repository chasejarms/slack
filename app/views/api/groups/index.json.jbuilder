json.set! :directMessages do
  json.array! @direct_messages do |direct_message|
    json.extract! direct_message, :id, :name
  end
end
json.set! :channels do
  json.array! @channels do |channel|
    json.extract! channel, :id, :name
  end
end
