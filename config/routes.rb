Rails.application.routes.draw do
  #root 'home#question'
  get '/' => "home#question"
  post 'home/result' => "home#result"
  get 'home/recommend' => "home#recommend"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
