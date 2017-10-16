Rails.application.routes.draw do
  root 'home#sandbox'
  get '/frontcover' => 'index#frontcover'
  get '/upsideDown1' => "michiru_panel_upside_down#upsideDown1"
  get '/img1' => "michiru_panel_img#img1"
end
