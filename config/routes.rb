Rails.application.routes.draw do
  resources :photos, only: [:index]
  resources :fosters, only: [:index, :show]
end
