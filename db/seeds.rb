# every channel has a quackbot message as the first message
# this helps on the frontend to send the correct group id
# when adding a new message to the channel

User.destroy_all
Group.destroy_all
Message.destroy_all
Subscription.destroy_all

quackbot = User.create!(username: "quackbot", password: "quackbot", email: "quackbot@quackbot.com")

def quackbot_message(group_id, channel, quackbot)
  correct_message = channel ? "channel" : "direct message"
  Message.create(user_id: quackbot.id, group_id: group_id, body: "This is the beginning of your #{correct_message}.")
end

chase = User.create!(username: "chasejarms", password: "password", email: "chasejarms@gmail.com")

planet = Proc.new { Faker::StarWars.unique.planet }
hacker_sentence= Proc.new { Faker::Hacker.unique.say_something_smart }

# creating a few channels from the start

Group.create!(name: "general", channel: true)
Group.create!(name: "ruby", channel: true)
Group.create!(name: "golf", channel: true)

20.times do
  # seeding 20 random channels that are all star wars planet names

  planet_name = planet.call().split(" ").joins("_")
  Group.create!(name: planet_name, channel: true)
  group_id = Group.find_by_name(planet_name).id
  quackbot_message(group_id,true, quackbot)
end

general_channel_id = Group.find_by_name("general").id
ruby_channel_id = Group.find_by_name("ruby").id
golf_channel_id = Group.find_by_name("golf").id

groups = [general_channel_id, ruby_channel_id, golf_channel_id]

# subscribing myself to the main channels

chasejarms_user_id = User.last.id

Subscription.create!(user_id: chasejarms_user_id, group_id: general_channel_id)
Subscription.create!(user_id: chasejarms_user_id, group_id: ruby_channel_id)
Subscription.create!(user_id: chasejarms_user_id, group_id: golf_channel_id)

superhero_users = []

50.times do
  # 50 random superhero users all subscribed to the general channel

  username = Faker::Superhero.unique.name.split(" ").join("_").downcase
  superhero_users << User.create!(
    username: username,
    password: Faker::Internet.password(8),
    email: "#{username}@starwars.com"
    )
  Subscription.create!(user_id: User.last.id, group_id: general_channel_id)
end

100.times do
  # 100 random messages for the three channels that exist

  Message.create!(
    user_id: superhero_users.sample.id,
    group_id: groups.sample,
    body: hacker_sentence.call()
  )
end


# guest user login to make it easier to demo the site

User.create!(username: "guest_one", password: "guest_one", email: "guest_one@guest_one.com")
Subscription.create!(user_id: User.last.id, group_id: general_channel_id)

User.create!(username: "guest_two", password: "guest_two", email: "guest_two@guest_two.com")
Subscription.create!(user_id: User.last.id, group_id: general_channel_id)
