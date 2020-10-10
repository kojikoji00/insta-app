class FavoritesController < ApplicationController
  def index
    @article = current_user.favorites
  end
end