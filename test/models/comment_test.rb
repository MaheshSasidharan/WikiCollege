require 'test_helper'

class CommentTest < ActiveSupport::TestCase
    
  def setup
    @com = Comment.new(commentData: "I have entered the comment")
  end
  
  test "Comment should be valid" do
    assert @com.valid?
  end
  
  test "Comment should be present" do
    @com.commentData = " "
    assert_not @com.valid?
  end
  
  
   test "Comment should not be too long" do
    @com.commentData = "a" * 201
    assert_not @com.valid?
  end
  
  
  test "Comment should not be too short" do
    @com.commentData = "aa"
    assert_not @com.valid?
  end

end 