class ProfilesController < ApplicationController

  def show
    @profile = current_user.profile
  end

  def edit
    @profile = current_user.prepare_profile
  end

  def update
    @profile = current_user.prepare_profile
    @profile.assign_attributes(profile_params)
    if @profile.save
      redirect_to profile_path, notice: ' プロフィールを更新しました'
    else
      flash.now[:error] = '更新できませんでした'
      render :edit
    end
  end

  # def article_count
  #   articles.count
  # end

  # def follower_count
  #   followers.count
  # end

  # def following_count
  #   followings.count
  # end


  private

  def profile_params
    params.require(:profile).permit(:avatar, :name)
  end
end
