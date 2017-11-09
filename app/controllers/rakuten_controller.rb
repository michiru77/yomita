# coding: utf-8
class RakutenController < ApplicationController
  def search
    if params[:keyword]

      @items1 = RakutenWebService::Books::Book.search(keyword: params[:keyword], hits: 1)
      @items2 = RakutenWebService::Books::Book.search(keyword: params[:keyword], hits: 3)
      @items3 = RakutenWebService::Books::Book.search(keyword: params[:keyword], hits: 30)
    end
  end
end
