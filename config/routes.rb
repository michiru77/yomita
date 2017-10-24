Rails.application.routes.draw do
  root 'index#frontcover'
  get "/index/frontcover" => "index#frontcover"
end
