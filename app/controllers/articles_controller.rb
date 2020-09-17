class ArticlesController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]

  def index
    @articles = Article.all
  end

  def show
  end

  def new
    @article = current_user.articles.build
  end

  def create
    @article = current_user.articles.build(article_params)
    if @article.save
      redirect_to article_path(@article), notice: '記事を投稿しました'
    else
      flash.now[:error] = '保存に失敗しました'
      render :new
    end
  end

  private

  def article_params
    params.require(:article).permit(:eyecatch, :title, :content)
  end
end
