Rails.application.routes.draw do
  #root 'index#frontcover'
  #root 'rakuten#search'
  #get 'rakuten_search' => 'rakuten#search'
  root 'home#index'
  get 'home_complexSearch' => 'home#complexSearch'
  get 'home_authorSearch' => 'home#authorSearch'
  get 'home_titleSearch' => 'home#titleSearch'
end
