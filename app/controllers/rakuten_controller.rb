class RakutenController < ApplicationController
  def search
    if params[:title]
      @items = RakutenWebService::Books::Book.search(title: params[:title], hits: 30)

      @items_1 = []
      @items_2 = []
      @items_3 = []
      @items.each_with_index do |item, i|
        @items_1 << item if i == 0
        @items_2 << item if (i >= 1 && i <= 3)
        @items_3 << item if i >= 4
      end
    end
  end
end
