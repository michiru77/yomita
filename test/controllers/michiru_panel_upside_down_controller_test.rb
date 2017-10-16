require 'test_helper'

class MichiruPanelUpsideDownControllerTest < ActionDispatch::IntegrationTest
  test "should get upsideDown1" do
    get upsideDown1_url
    assert_response :success
    assert_select "title", "Yomita"
  end

end
