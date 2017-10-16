# coding: utf-8
Rails.application.routes.draw do
  get '/img1' => "minemichi#img1"
  get '/upsideDown1' => "minemichi#upsideDown1"
  # defaultページを固定
  get '/' => "home#sandbox"
  # 定型文
  # get '' => ""
end
