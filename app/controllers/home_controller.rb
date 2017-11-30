# coding: utf-8
class HomeController < ApplicationController

  def index
    if params[:number]
      session[:Receivefruit] = nil
    end
    cookies[:image]=[]
    cookies[:image] = params[:img]
    p '-------------------------------------------------------------------------------------------------------------'
    p 'cookies[:image]を表示します'
    p cookies[:image]
    p '-------------------------------------------------------------------------------------------------------------'
    gon.ItemUrl = cookies[:image]

    #render json: gon.image

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

    #セッション初期化処理
    if params[:number]
      session[:Receivefruit] = nil
    end

    if session[:Receivefruit].blank?
     session[:Receivefruit] = ["tmp"]
     session[:Receivefruit][0] = params[:img]
     p '🔴  sessionを初期化したよ。'
    else
      #session[:Receivefruit] = ["a"]
     session[:Receivefruit][session[:Receivefruit].length]= params[:img]
      p '🔴  sessionに追加したよ。'
      p session[:Receivefruit]
      #session[:Receivefruit] = []
    end
    gon.history_list = session[:Receivefruit]
    p '🔵'
    p session[:Receivefruit]
    p '通ります'

    session[:alt] = []
    session[:alt] = 'alt'


    #session[:BookData] = []
    session[:BookData][1] = {title: params[:title],author: params[:author], caption: params[:caption], img: params[:img]}
    p session[:BookData][:title]
  end


end
