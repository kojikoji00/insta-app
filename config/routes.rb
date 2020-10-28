require 'sidekiq/web'

Rails.application.routes.draw do
  mount Sidekiq::Web => '/sidekiq' if Rails.env.development?
  mount LetterOpenerWeb::Engine, at: '/letter_opener' if Rails.env.development?
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'timelines#show'
  # root to: 'articles#index'
  resource :profile, only: [:show, :edit, :update]
  resource :timeline, only: [:show]
  resources :articles, only: [:index, :show, :new, :create, :edit, :update, :destroy] do
    resource :like, only: [:show, :create, :destroy]
    resources :comments, only: [:index, :show, :new, :create]
  end
  resources :favorites, only: [:index]

  resources :accounts, only: [:show] do
    resources :follows, only: [:create]
    resources :unfollows, only: [:create]
  end
  # scope module: :apps do
  resource :timeline, only: [:show]
    # resources :favorites, only: [:index]#  いいね
  # end
end