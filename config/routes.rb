Rails.application.routes.draw do
  #root 'home#sandbox'
  root 'michiru_panel_img#img1'
  get '/frontcover' => 'index#frontcover'
  get '/upsideDown1' => "michiru_panel_upside_down#upsideDown1"
  get '/img1' => "michiru_panel_img#img1"
end
