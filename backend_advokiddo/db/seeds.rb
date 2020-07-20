# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all 
Level.destroy_all 
Point.destroy_all 
Video.destroy_all 
Answer.destroy_all 
Phrase.destroy_all 
Response.destroy_all 
Prize.destroy_all 
Ordering.destroy_all 
Capture.destroy_all 
Incentive.destroy_all 
Recording.destroy_all 
Child.destroy_all 

20.times do 
    User.create(username: Faker::Name.name, first_name: Faker::Name.first_name, last_name:Faker::Name.last_name, email: Faker::Internet.email, password_digest: Faker::Code.npi)
end 

15.times do
    Child.create(user_id: User.all.first.id, first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, age: 22, image: "https://picsum.photos/#{rand(1..300)}")
end 

10.times do
    Level.create(name: Faker::Name.name, child_id: Child.first.id)
end 

10.times do
    Answer.create(level_id: Level.first.id, info: Faker::Quote.yoda)
end 

10.times do
    Phrase.create(user_id: User.last.id, level_id: Level.last.id, info: Faker::Quote.yoda)
end 

10.times do
    Point.create(child_id: Child.last.id, total: 50)
end 

