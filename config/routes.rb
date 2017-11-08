Rails.application.routes.draw do
  root 'index#frontcover'
  get 'rakuten_search' => 'rakuten#search'
end
