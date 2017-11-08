class RakutenController < ApplicationController
  def search
    if params[:keyword]
      @items1 = RakutenWebService::Ichiba::Item.search(keyword: params[:keyword], hits: 1)
      @items2 = RakutenWebService::Ichiba::Item.search(keyword: params[:keyword], hits: 3)
      @items3 = RakutenWebService::Ichiba::Item.search(keyword: params[:keyword], hits: 30)
    end
  end
end
