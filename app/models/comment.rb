class Comment < ActiveRecord::Base
    belongs_to :user
    belongs_to :post
    
    # def self.updateCommentCommentId(commentId, text)
    #     where("user = ? AND post = ?", "%#{userId}%", "%#{postId}%")
    # end
    
end
