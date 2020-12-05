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
    if @profile.save!
      # render json: @profile
      render :show
    else
      # render json: @profile.errors
    end
  end



  private

  def profile_params
    params.require(:profile).permit(:avatar)
  end
end
