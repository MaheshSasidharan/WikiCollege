require 'spec_helper'
require 'rails_helper'

describe University do
   

end



# require 'test_helper'

# class UniversityTest < ActiveSupport::TestCase
    
#   def setup
#     @uni = University.new(desc: "Princeton, the fourth-oldest college in the United States, is located in the quiet town of Princeton, New Jersey. Within the walls of its historic ivy-covered campus, Princeton offers a number of events, activities and organizations. The Princeton Tigers, members of the Ivy League, are well known for their consistently strong men& 39;s and women& 39;s lacrosse teams. Students live in one of six residential colleges that provide a residential community as well as dining services but have the option to join one of more than 10 eating clubs for their junior and senior years.",
#     city: "Princeton",
#     state: "NJ",zip: "45320", name: "Princeton University",collegeType: "Private",rank: "1", acceptanceRate: "7",
#     enrollment: "5402",arrTuition:"45320")
#   end
  
#   test "University should be valid" do
#     assert @uni.valid?
#   end
  
#   test "University description should be present" do
#     @uni.desc = " "
#      assert @uni.valid?
#   end
  
  
#   test "University description should not be too long" do
#     @uni.desc = "a" * 1000
#      assert @uni.valid?
#   end
  
  
#   test "University description should not be too short" do
#     @uni.desc = "aaaaa"
#      assert @uni.valid?
#   end
  
#   test "University city should be present" do
#     @uni.collegeType = " "
#      assert @uni.valid?
#   end
  
#    test "University state should be present" do
#     @uni.state = " "
#      assert @uni.valid?
#    end
  
#    test "University zipcode should be present" do
#     @uni.zip = " "
#      assert @uni.valid?
#    end
  
#    test "University name should be present" do
#     @uni.name = " "
#      assert @uni.valid?
#    end
  
#    test "University collegeType should be present" do
#     @uni.collegeType = " "
#      assert @uni.valid?
#    end
  
#    test "University rank should be present" do
#     @uni.rank = " "
#     assert @uni.valid?
#    end
  
#    test "University acceptanceRate should be present" do
#     @uni.acceptanceRate = " "
#      assert @uni.valid?
#    end
  
#    test "University enrollment should be present" do
#     @uni.enrollment = " "
#      assert @uni.valid?
#    end
 
#   test "University Tuition fee should be present" do
#     @uni.arrTuition = " "
#      assert @uni.valid?
#    end
  
  
# end 