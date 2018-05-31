Rails.application.routes.draw do
  get 'top/index'

  root to: 'top#index'
  # resource :top, only: :index
  match "introduction", :to => 'top#introduction',via: [:get]
end
