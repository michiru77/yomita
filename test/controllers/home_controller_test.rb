require 'test_helper'

class HomeControllerTest < ActionDispatch::IntegrationTest

  test "should get root" do
    get root_url
    assert_response :success
    assert_select "title", "Yomita"
  end

end
