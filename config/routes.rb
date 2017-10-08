Rails.application.routes.draw do
  # defaultページを固定
  get '/' => "home#top"
  get 'home/introduct' => "home#introduct"
  get 'home/minemichi' => "home#e155736"
  get 'home/sandbox' => "home#sandbox"
  # 定型文
  # get '' => ""

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
