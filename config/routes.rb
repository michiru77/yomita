Rails.application.routes.draw do
  root 'home#index'
  get 'home_history' => 'home#history'
  get 'home_index' => 'home#index'
  get 'home_titleSearch' => 'home#titleSearch'
  get 'home_authorSearch' => 'home#authorSearch'
  get 'home_genreSearch' => 'home#genreSearch'
  get 'home_isbnSearch' => 'home#isbnSearch'
  get 'home_sortSearch' => 'home#sortSearch'
end
