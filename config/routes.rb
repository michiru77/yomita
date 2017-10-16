# coding: utf-8
Rails.application.routes.draw do
  # defaultページを固定
  root "home#sandbox"
  get '/' => "home#sandbox"
  # 定型文
  # get '' => ""
end
