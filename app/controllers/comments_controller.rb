class CommentsController < ApplicationController
  before_action :authenticate_user!

  def new
    article = Article.find(params[:article_id])
    @comment = article.comment.build
  end

  def index
    article = Article.find(params[:article_id])
    comments = article.comment

    render json: comments
  end

  def create
    article = Article.find(params[:article_id])
    @comment = article.comment.build(comment_params)
    render json: @comment
  end

  private

  def comment_params
    params.require(:comment).permit(:content)
  end
end