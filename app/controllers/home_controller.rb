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

  def isbnSearch
    data = RakutenWebService::Books::Book.search(isbn: params[:isbn],
                                                 hits: params[:hits])
    render json: data
    #binding.pry
  end

  def history
    if params[:number]
      session[:Receivefruit] = nil
    end

    if session[:Receivefruit].blank?
     session[:Receivefruit] = ["tmp"]
     session[:Receivefruit][0] = params[:fruit]
     p '🔴  sessionを初期化したよ。'
    else
      #session[:Receivefruit] = ["a"]
     session[:Receivefruit][session[:Receivefruit].length]= params[:fruit]
      p '🔴  sessionに追加したよ。'
      p session[:Receivefruit]
      #session[:Receivefruit] = []
    end
    gon.history_list = session[:Receivefruit]
    p '🔵'
    p session[:Receivefruit]
    p '通ります'
    gon.value = 1
    #session[:Receivefruit] = []
    #session[:Receivefruit] = params[:fruit]
    #p session[:Receivefruit]
    #data = params[:fruit]
    #p "dataは"+data
    #p data
    #render json: data
  end


end
