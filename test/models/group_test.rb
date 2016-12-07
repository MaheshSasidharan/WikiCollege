require 'test_helper'

class GroupTest < ActiveSupport::TestCase
    
  def setup
    @grp = Group.new(desc: "This group is for discussions about housing", groupName: "Housing" )
  end
  
  test "Group should be valid" do
    assert @grp.valid?
  end
  
  test "Group name should be present" do
    @grp.groupName = " "
    assert_not @grp.valid?
  end
  
  
   test "Group name should not be too long" do
    @grp.groupName = "a" * 16
    assert_not @grp.valid?
  end
  
  
  test "Group name should not be too short" do
    @grp.groupName = "aa"
    assert_not @grp.valid?
  end
  
  test "Group description should be present" do
    @grp.desc = " "
    assert_not @grp.valid?
  end
  
  
   test "Group description should not be too long" do
    @grp.desc = "a" * 51
    assert_not @grp.valid?
  end
  
  
  test "Group description should not be too short" do
    @grp.desc = "aaaa"
    assert_not @grp.valid?
  end

end 