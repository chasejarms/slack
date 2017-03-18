# will use the following things later

def slackbot_message(group_id, channel)
  correct_message = channel ? "channel" : "direct message"
  Message.create(user_id: 1, group_id: group_id, body: "This is the beginning of your #{correct_message}.")
end

character = Proc.new { Faker::StarWars.unique.character }
droid = Proc.new { Faker::StarWars.unique.droid }
planet = Proc.new { Faker::StarWars.unique.planet }
quote = Proc.new { Faker::StarWars.unique.quote }
specie = Proc.new { Faker::StarWars.unique.specie }
vehicle = Proc.new { Faker::StarWars.unique.vehicle }
wookie_sentence = Proc.new { Faker::StarWars.unique.wookie_sentence }
hipster_words = Proc.new { Faker::Hipster.sentence(rand(15).floor) }
hacker_sentence= Proc.new { Faker::Hacker.unique.say_something_smart }

# creating a few channels from the start

Group.create!(name: "General", channel: true)
Group.create!(name: "Ruby", channel: true)
Group.create!(name: "Star Wars", channel: true)

# creating a few direct messages from the start

Group.create!(name: "LeoSalat", channel: false)
Group.create!(name: "JesseFurukawa", channel: false)

general_id = Group.find_by_name("General").id
ruby_id = Group.find_by_name("Ruby").id
star_wars_id = Group.find_by_name("Star Wars").id
leo_salat_id = Group.find_by_name("LeoSalat").id
jesse_furukawa_id = Group.find_by_name("JesseFurukawa").id


User.create!(username: "slackbot", password: "slackbot", email: "slackbot@slackbot.com")
User.create!(username: "chasejarms", password: "password", email: "chasejarms@gmail.com")

Subscription.create!(user_id: User.last.id, group_id: general_id)
Subscription.create!(user_id: User.last.id, group_id: ruby_id)
Subscription.create!(user_id: User.last.id, group_id: star_wars_id)
Subscription.create!(user_id: User.last.id, group_id: leo_salat_id)
Subscription.create!(user_id: User.last.id, group_id: jesse_furukawa_id)

50.times do
  username = Faker::Superhero.unique.name.split(" ").join("_")
  User.create!(
    username: username,
    password: Faker::Internet.password(8),
    email: "#{username}@starwars.com"
    )
  Subscription.create!(user_id: User.last.id, group_id: general_id)
end

100.times do
  Message.create!(
    user_id: rand(50) + 1,
    group_id: rand(5) + 1,
    body: hacker_sentence.call()
  )
end


User.create!(username: "guest_one", password: "guest_one", email: "guest_one@guest_one.com")
Subscription.create!(user_id: User.last.id, group_id: general_id)

User.create!(username: "guest_two", password: "guest_two", email: "guest_two@guest_two.com")
Subscription.create!(user_id: User.last.id, group_id: general_id)
