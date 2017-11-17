# coding: utf-8
class HomeController < ApplicationController

  def index
  end

  def search
    data = RakutenWebService::Books::Book.search(title: params[:title], hits: 2)
    render :json => data
#    binding.pry
  end

end
