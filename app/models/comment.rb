class Comment < ActiveRecord::Base
    belongs_to :user
    belongs_to :post
    #has_many :likecomments
    
    
    validates :commentData, presence: true, length: {minimum: 3, maximum: 200}
    
    # def self.updateCommentCommentId(commentId, text)
    #     where("user = ? AND post = ?", "%#{userId}%", "%#{postId}%")
    # end
    
end
