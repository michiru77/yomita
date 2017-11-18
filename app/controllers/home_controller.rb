# coding: utf-8
class HomeController < ApplicationController

  def index
  end

  def complexSearch
    data = RakutenWebService::Books::Book.search(autor: params[:author],
                                                 genre: params[:genre],
                                                 hits: params[:hits])
    render :json => data
    #binding.pry
  end

  def authorSearch
    data = RakutenWebService::Books::Book.search(author: params[:author],
                                                 hits: params[:hits])
    render :json => data
    #binding.pry
  end

  def titleSearch
    data = RakutenWebService::Books::Book.search(title: params[:title],
                                                 hits: params[:hits])
    render :json => data
    #binding.pry
  end

end
