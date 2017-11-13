Rails.application.routes.draw do
  #root 'index#frontcover'
  #root 'rakuten#search'
  #get 'rakuten_search' => 'rakuten#search'
  root 'home#index'
  get 'home_search' => 'home#search'
end
