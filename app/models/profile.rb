# == Schema Information
#
# Table name: profiles
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_profiles_on_user_id  (user_id)
#
class Profile < ApplicationRecord
  belongs_to :user
  has_one_attached :avatar
  # validates :name, uniqueness: true

  # def default_avatar
  #   if !self.avatar.attached?
  #     self.avatar.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'default-avatar.png')), filename: 'default-avatar.png', content_type: 'image/png')
  #   end
  # end
end
