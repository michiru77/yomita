Rails.application.routes.draw do
  # root 'index#frontcover'
  # root 'rakuten#search'
  # get 'rakuten_search' => 'rakuten#search'
  # get '/historypage' => 'index#historypage'
  get 'home_history' => 'home#history'
  get 'home_index' => 'home#index'
  root 'home#index'
  get 'home_authorSearch' => 'home#authorSearch'
  get 'home_titleSearch' => 'home#titleSearch'
  get 'home_genreSearch' => 'home#genreSearch'
  get 'home_isbnSearch' => 'home#isbnSearch'
end
