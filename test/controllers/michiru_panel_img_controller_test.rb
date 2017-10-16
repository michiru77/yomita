require 'test_helper'

class MichiruPanelImgControllerTest < ActionDispatch::IntegrationTest
  test "should get img1" do
    get michiru_panel_img_img1_url
    assert_response :success
  end

end
