Rails.application.routes.draw do
  root 'home#sandbox'
  get 'index/frontcover'
  get '/img1' => "minemichi#img1"
  get '/upsideDown1' => "minemichi#upsideDown1"
end
