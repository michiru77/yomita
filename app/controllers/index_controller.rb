class IndexController < ApplicationController
  def frontcover
  	gon.historyList = session[:history]
  	@location = request.url
  	@resetUrl = if request.url[-1]!="/" then  request.url+"&historyReset=1" else request.url+"?historyReset=1" end
  	@historyReset = params[:historyReset]
  	@bookID = params[:bookID]
  	@historyList = session[:history]
  	@id = params[:id]
  end
  def historypage
    gon.historyList = session[:history]
  	@location = request.url
  	@resetUrl = if request.url[-1]!="/" then  request.url+"?historyReset=1" else request.url+"?historyReset=1" end
  	@historyReset = params[:historyReset]
  	@bookID = params[:bookID]
  	@historyList = session[:history]
  	@id = params[:id]
  end
end
