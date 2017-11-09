Rails.application.routes.draw do
  # root 'index#frontcover'
  root 'rakuten#search'
  get 'rakuten_search' => 'rakuten#search'
end
