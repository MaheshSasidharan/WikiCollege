class Post < ActiveRecord::Base
    belongs_to :group
    belongs_to :user
    has_many :comments
    #validates :id, presence: true 
    validates :postData, presence: true, length: {minimum: 0, maximum: 500}
    
  #implementing thumbs up feature
#   def thumbs_up_total
#     self.likes.where(like: true).size
#   end
  
#   #implementing thumbs down feature
#   def thumbs_down_total
#   self.likes.where(like: false).size
#   end
    
end
