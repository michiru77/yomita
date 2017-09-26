Rails.application.routes.draw do
  get 'home/question' => "home#question"
  post 'home/result' => "home#result"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
