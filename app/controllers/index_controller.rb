class IndexController < ApplicationController
  def frontcover
  	gon.historyList = session[:history]
  	@location = request.url
  	@reset = params[:reset]
  	@bookID = params[:bookID]
  	@historyList = session[:history]
  	@id = params[:id]
  end
end
