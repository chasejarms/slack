Rails.application.routes.draw do
  # mount ActionCable.server => '/cable'

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy]
    resources :groups, only: [:index, :create]
    resources :subscriptions, only: [:index, :create]
    resources :messages, only: [:index, :create]
  end
end
