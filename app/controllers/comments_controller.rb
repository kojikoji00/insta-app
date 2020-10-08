class CommentsController < ApplicationController
  before_action :authenticate_user!

  def new
    article = Article.find(params[:article_id])
    @comment = article.comments.build
  end
  
  def index
    article = Article.find(params[:article_id])
    comments = article.comment

    render json: comments
  end

  def create
    article = Article.find(params[:article_id])
    @comment = article.comments.build(comment_params)
    if @comment.save!
      redirect_to article_path(article), notice: 'コメント追加'  
    else
      flash.now[:error] = '更新できませんでした'
      render :new
    end
    # redirect_to article_comment_path(article_id: @comment.article_id, id: @comment.id)
      # render json @comment
  end

  private

  def comment_params
    params.require(:comment).permit(:content)
  end
end