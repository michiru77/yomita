# coding: utf-8
class HomeController < ApplicationController

  def index

    if cookies[:image].blank?
      cookies[:image] = ["tmp"]
      p '🔴  cookiesを初期化したよ。'
    elsif params[:img] != nil
      tmp20 = cookies[:image].split('&')
      tmp20.delete('tmp')
      #cookies[:Receivefruit] = ["a"]
      tmp20.push(params[:img])
      tmp20.uniq!
      #cookies[:image]=cookies[:image].split('&').push(params[:img]).uniq!
      cookies[:image]=tmp20
      p '🔴  cookiesに追加したよ。'
      p cookies[:image]
      #cookies[:Receivefruit] = []
    end

    if cookies[:ISBN].blank?
      cookies[:ISBN] = ["tmp"]
      p '🔴  cookies[:isbn]を初期化したよ。'
      p cookies[:ISBN]
    elsif params[:ISBN1] != nil
      tmp21 = cookies[:ISBN].split('&')
      tmp21.delete('tmp')
      #cookies[:Receivefruit] = ["a"]
      tmp21.push(params[:ISBN1])
      tmp21.uniq!
      #cookies[:image]=cookies[:image].split('&').push(params[:img]).uniq!
      cookies[:ISBN]=tmp21
      p '🔴  cookies[:isbn]に追加したよ。'
      p cookies[:ISBN]
      #cookies[:Receivefruit] = []
    end

    p '-------------------------------------------------------------------------------------------------------------'
    p 'cookies[:image]を表示します'
    p cookies[:image]

    gon.clorets = session[:sumikko]
    p '-------------------------------------------------------------------------------------------------------------'
    p 'gon.cloretsを表示します'
    p gon.clorets
    p '-------------------------------------------------------------------------------------------------------------'

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
