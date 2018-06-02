Rails.application.routes.draw do
  get 'top/index'

  root to: 'top#index'
  # resource :top, only: :index
  match "introduction", :to => 'top#introduction',via: [:get]
  match "sweets", :to=> 'top#sweets', via: [:get]
  match "dinner", :to=> 'top#dinner', via: [:get]
  match "chinese", :to=> 'top#chinese', via: [:get]
  match "contacts", :to=> 'top#contacts', via: [:get]
end
