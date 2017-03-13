# will use the following things later

character = Proc.new { Faker::StarWars.character }
droid = Proc.new { Faker::StarWars.droid }
planet = Proc.new { Faker::StarWars.planet }
quote = Proc.new { Faker::StarWars.quote }
specie = Proc.new { Faker::StarWars.specie }
vehicle = Proc.new { Faker::StarWars.vehicle }
wookie_sentence = Proc.new { Faker::StarWars.wookie_sentence }

# creating a few channels from the start

Group.create!(name: "General", channel: true)
Group.create!(name: "Ruby", channel: true)
Group.create!(name: "Star Wars", channel: true)

50.times do
  username = Faker::Superhero.unique.name.split(" ").join("_")
  User.create!(
    username: username,
    password: Faker::Internet.password(8),
    email: "#{username}@starwars.com"
    )
end

User.create!(username: "chasejarms", password: "password", email: "chase@hireme.com")
User.create!(username: "guest_one", password: "guest_one", email: "guest_one@guest_one.com")
User.create!(username: "guest_two", password: "guest_two", email: "guest_two@guest_two.com")
