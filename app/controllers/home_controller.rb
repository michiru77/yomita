class HomeController < ApplicationController
  def question
  end
  def result
  	params[:input_txt]
  	redirect_to("/home/question")
  end
end
