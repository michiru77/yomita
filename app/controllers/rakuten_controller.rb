class RakutenController < ApplicationController
  def search
    if params[:title]
      #      @items1 = RakutenWebService::Books::Book.search(title: params[:title], hits: 1)
      #      @items2 = RakutenWebService::Books::Book.search(title: params[:title], hits: 3)
      #      @items3 = RakutenWebService::Books::Book.search(title: params[:title], hits: 30)
      @list = RakutenWebService::Books::Book.search(title: params[:title], hits: 30)
      @items1 = @list[0]
      @items2 = RakutenWebService::Books::Book.search(title: params[:title], hits: 30)
      @items3 = RakutenWebService::Books::Book.search(title: params[:title], hits: 30)
    end
  end
end
