require 'test_helper'

class PostTest < ActiveSupport::TestCase

  def setup
    @pos = Post.new(postData: "I have entered the comment")
  end
  
  test "Post should be valid" do
    assert @pos.valid?
  end
  
  test "Post should be present" do
    @pos.postData = " "
    assert_not @pos.valid?
  end
  
  
   test "Post should not be too long" do
    @pos.postData = "a" * 101
    assert_not @pos.valid?
  end
  
  
  test "Post should not be too short" do
    @pos.postData = "aaaa"
    assert_not @pos.valid?
  end

end   