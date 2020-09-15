class ApplicationController < ActionController::Base
  # 国際化
  before_action :set_locale

  # def after_sign_in_path_for(_resource)
  #   if current_user.profile.present?
  #     root_path
  #   else
  #     new_profile_path
  #   end
  # end

  def current_user
    ActiveDecorator::Decorator.instance.decorate(super) if super.present?
    super
  end

  def default_url_options
    { locale: I18n.locale }
  end

  private

  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end
end
