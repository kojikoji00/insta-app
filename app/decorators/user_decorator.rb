# frozen_string_literal: true

module UserDecorator
  def display_name
    @user&.name || self.email.split('@').first
  end
  
  def avatar_image
    if profile&.avatar&.attached?
      profile.avatar
    else
      'default-avatar.png'
    end
  end

  def has_liked?(article)
    likes.exists?(article_id: article.id)
  end
end
