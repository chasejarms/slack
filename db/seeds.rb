=begin
Faker::StarWars.character #=> "Anakin Skywalker"

Faker::StarWars.droid #=> "C-3PO"

Faker::StarWars.planet #=> "Tatooine"

Faker::StarWars.quote #=> "Aren’t you a little short for a Stormtrooper?"

Faker::StarWars.specie #=> "Gungan"

Faker::StarWars.vehicle #=> "Sandcrawler"

Faker::StarWars.wookie_sentence #=> "Yrroonn ru ooma roo ahuma ur roooarrgh hnn-rowr."
=end

character = Proc.new { Faker::StarWars.character }
droid = Proc.new { Faker::StarWars.droid }
planet = Proc.new { Faker::StarWars.planet }
quote = Proc.new { Faker::StarWars.quote }
specie = Proc.new { Faker::StarWars.specie }
vehicle = Proc.new { Faker::StarWars.vehicle }
wookie_sentence = Proc.new { Faker::StarWars.wookie_sentence }

# creating a general channel to subscribe all users to

Channel.create!(name: "General")
general_id = Channel.find_by_name("General").id

50.times do
  username = Faker::Superhero.unique.name.split(" ").join("_")
  User.create!(username: username, password: Faker::Internet.password(8) )
end

# subscribing all users to the general channel

users = User.all
users.each do |user|
  Membership.create!(user_id: user.id, )
end

10.times do
  DirectMessage.create!()
end

100.times do

end

Channel.create!(name: "Ruby")
Channel.create!(name: "Star Wars")

User.create!(username: "chasejarms", password: "password")
