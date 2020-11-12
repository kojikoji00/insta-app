# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#
class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  # attributes :id, :comment_avatar_image, :display_name
  attributes :id, :profile, :avatar_image, :display_name
  has_many :comments
  # has_many :articles
  has_one :profile
  # def comment_avatar_image
  #   rails_blob_path(object.avatar_image) if object.avatar_image.attachment
  # end

end
