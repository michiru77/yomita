require 'test_helper'

class HomeControllerTest < ActionDispatch::IntegrationTest
  test "should get question" do
    get home_question_url
    assert_response :success
  end

end
