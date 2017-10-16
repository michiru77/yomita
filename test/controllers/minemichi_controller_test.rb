require 'test_helper'

class MinemichiControllerTest < ActionDispatch::IntegrationTest
  test "should get img1" do
    get minemichi_img1_url
    assert_response :success
  end

end
