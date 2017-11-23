Rails.application.routes.draw do
  root 'index#frontcover'
  get '/historypage' => 'index#historypage'
end
