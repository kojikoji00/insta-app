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
class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :avatar, :user
  # has_many :comments
  belongs_to :user
end
