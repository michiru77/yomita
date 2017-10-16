require 'test_helper'

class MichiruPanelImgControllerTest < ActionDispatch::IntegrationTest
  test "should get img1" do
    get img1_url
    assert_response :success
  end

end
