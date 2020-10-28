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
class Article < ApplicationRecord
  belongs_to :user
  has_many :comment
  # has_many_attached :eyecatches
  has_many_attached :photos
  has_many :likes, dependent: :destroy
  has_many :liked_users, through: :likes, source: :user
end
