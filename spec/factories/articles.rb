# == Schema Information
#
# Table name: articles
#
#  id         :integer          not null, primary key
#  content    :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_articles_on_user_id  (user_id)
#
FactoryBot.define do
  factory :article do
    content { Faker::Lorem.characters(number: 100) }
    after(:build) do |article|
      article.photos.attach(io: File.open(Rails.root.join('spec', 'fixtures', 'images', 'article1.png')), filename: 'article1.png', content_type: 'image/png')
    end
  end
end
