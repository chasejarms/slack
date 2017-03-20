# every channel has a slackbot message as the first message
# this helps on the frontend to send the correct group id
# when adding a new message to the channel

def slackbot_message(group_id, channel)
  correct_message = channel ? "channel" : "direct message"
  Message.create(user_id: 1, group_id: group_id, body: "This is the beginning of your #{correct_message}.")
end

User.create!(username: "slackbot", password: "slackbot", email: "slackbot@slackbot.com")
User.create!(username: "chasejarms", password: "password", email: "chasejarms@gmail.com")

planet = Proc.new { Faker::StarWars.unique.planet }
hacker_sentence= Proc.new { Faker::Hacker.unique.say_something_smart }

# creating a few channels from the start

Group.create!(name: "general", channel: true)
Group.create!(name: "ruby", channel: true)
Group.create!(name: "golf", channel: true)

20.times do
  # seeding 20 random channels that are all star wars planet names

  planet_name = planet.call()
  Group.create!(name: planet_name, channel: true)
  group_id = Group.find_by_name(planet_name).id
  slackbot_message(group_id,true)
end

general_channel_id = Group.find_by_name("general").id
ruby_channel_id = Group.find_by_name("ruby").id
golf_channel_id = Group.find_by_name("golf").id

# subscribing myself to the main channels

chasejarms_user_id = User.last.id

Subscription.create!(user_id: chasejarms_user_id, group_id: general_channel_id)
Subscription.create!(user_id: chasejarms_user_id, group_id: ruby_channel_id)
Subscription.create!(user_id: chasejarms_user_id, group_id: golf_channel_id)

50.times do
  # 50 random superhero users all subscribed to the general channel

  username = Faker::Superhero.unique.name.split(" ").join("_").downcase
  User.create!(
    username: username,
    password: Faker::Internet.password(8),
    email: "#{username}@starwars.com"
    )
  Subscription.create!(user_id: User.last.id, group_id: general_channel_id)
end

100.times do
  # 100 random messages for the three channels that exist

  Message.create!(
    user_id: rand(50) + 1,
    group_id: rand(3) + 1,
    body: hacker_sentence.call()
  )
end


# guest user login to make it easier to demo the site

User.create!(username: "guest_one", password: "guest_one", email: "guest_one@guest_one.com")
Subscription.create!(user_id: User.last.id, group_id: general_channel_id)

User.create!(username: "guest_two", password: "guest_two", email: "guest_two@guest_two.com")
Subscription.create!(user_id: User.last.id, group_id: general_channel_id)
