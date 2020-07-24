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

Incentive.create(user_id: User.all.first, child_id: Child.all.last, points_required: 0, prizeone: "fun", prizetwo: "fun", prizethree: "fun", prizefive: "fun", prizesix: "fun")
