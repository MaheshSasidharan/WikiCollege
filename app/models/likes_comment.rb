class Likes_comment <ActiveRecord::Base
    belongs_to :user
    belongs_to :comment
    
    validates_uniqueness_of :user, scope: :comment
end     