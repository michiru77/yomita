require 'test_helper'

class MichiruPanelUpsideDownControllerTest < ActionDispatch::IntegrationTest
  test "should get upsideDown1" do
    get michiru_panel_upside_down_upsideDown1_url
    assert_response :success
  end

end
