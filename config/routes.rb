Rails.application.routes.draw do
  root 'home#sandbox'
  get 'index/frontcover' => "index#frontcover"
end
