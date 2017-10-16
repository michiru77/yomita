# coding: utf-8
Rails.application.routes.draw do
  get '/upsideDown1' => "michiru_panel_upside_down#upsideDown1"
  get '/img1' => "michiru_panel_img#img1"
  # defaultページを固定
  get '/' => "home#sandbox"
  # 定型文
  # get '' => ""
end
