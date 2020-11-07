class UserSerializer < ActiveModel::Serializer
  attributes :id, :avatar_image, :display_name
  has_many :comments, serializer: CommentSerializer
  has_many :articles, serializer: ArticleSerializer
end
