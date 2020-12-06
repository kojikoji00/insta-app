FactoryBot.define do
  factory :profile do
    name { Faker::Lorem.characters(number: 10)}
  end
end