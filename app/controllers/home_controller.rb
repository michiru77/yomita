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
  	@result6=params[:bestbook1]
  	@result7=params[:bestbook2]
  	@result8=params[:bestbook3]
  	# redirect_to("/home/question")
  end
  def recommend
  end
end