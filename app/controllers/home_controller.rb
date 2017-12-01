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

=begin
    if params[:number]
      session[:Receivefruit] = nil
    end
    #cookies[:image]=[]
    if cookies[:image].blank?
      cookies[:image] = ["tmp"]
      cookies[:image][0] = params[:img]
    else
      cookies[:image][cookies[:image].length] = params[:img]
    end
=end

=begin
    if session[:sumikko].blank?
      session[:sumikko] = ["tmp"]
      session[:sumikko][0] = params[:img]
    else
      session[:sumikko][session[:sumikko].length] = params[:img]
    end
=end

    #cookies[:image][cookies[:image].length] = params[:img]
    #session[:sumikko][session[:sumikko].length] = params[:img]
    p '-------------------------------------------------------------------------------------------------------------'
    p 'cookies[:image]を表示します'
    p cookies[:image]
=begin
    p '-------------------------------------------------------------------------------------------------------------'
    p '-------------------------------------------------------------------------------------------------------------'
    p 'cookies[:sumikko]を表示します'
    p session[:sumikko]
    p '-------------------------------------------------------------------------------------------------------------'
=end
    #gon.ItemUrl = cookies[:image]
    gon.clorets = session[:sumikko]
    p '-------------------------------------------------------------------------------------------------------------'
    p 'gon.cloretsを表示します'
    p gon.clorets
    p '-------------------------------------------------------------------------------------------------------------'
    gon.hiroya = 'ひろや'
    gon.gazou = params[:img]
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
