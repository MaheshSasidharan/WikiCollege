#class Comment < ActiveRecord::Base.connection.adapter_name == 'Mysql2'
class Comment < ActiveRecord::Base
    belongs_to :user
    belongs_to :post
    #has_many :likecomments

    validates :commentData, presence: true, length: {minimum: 0, maximum: 500}
    # def self.updateCommentCommentId(commentId, text)
    #     where("user = ? AND post = ?", "%#{userId}%", "%#{postId}%")
    # end
    
end
