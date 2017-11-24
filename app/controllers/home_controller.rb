# coding: utf-8
class HomeController < ApplicationController

  def index
  end

  def authorSearch
    data = RakutenWebService::Books::Book.search(author: params[:author],
                                                 hits: params[:hits])
    render json: data
    #binding.pry
  end

  def titleSearch
    data = RakutenWebService::Books::Book.search(title: params[:title],
                                                 hits: params[:hits])
    render json: data
    #binding.pry
  end

  def genreSearch
    data = RakutenWebService::Books::Book.search(booksGenreId: params[:booksGenreId],
                                                 hits: params[:hits])
    render json: data
    #binding.pry
  end

  def history

    #if session[:Receivefruit].blank?
    # session[:Receivefruit] = []
    #else
    # session[:Receivefruit].push(params[:fruit])
    #end

    session[:Receivefruit] = []
    session[:Receivefruit] = params[:fruit]
    p session[:Receivefruit]
    data = params[:fruit]
    p "dataは"+data
    #p data
    render json: data

  end


end
