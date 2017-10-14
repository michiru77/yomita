# coding: utf-8
Rails.application.routes.draw do
  get 'index/frontcover' => "index#frontcover"

  # defaultページを固定
  get '/' => "home#sandbox"
  # 定型文
  # get '' => ""
end
