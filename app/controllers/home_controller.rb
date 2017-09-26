class HomeController < ApplicationController
  def question
  end
  def result
  	# params[:input_txt]
  	@result1=params[:username]
  	@result2=params[:age]
  	@result3=params[:job]
  	@result4=params[:tel]
  	@result5=params[:sakka]
  	# redirect_to("/home/question")
  end
end
