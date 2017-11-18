# coding: utf-8
class HomeController < ApplicationController

  def index
  end

  def search
    data = RakutenWebService::Books::Book.search(title: params[:title],
                                                 hits: params[:hits])
    render :json => data
    #    binding.pry
  end

end
