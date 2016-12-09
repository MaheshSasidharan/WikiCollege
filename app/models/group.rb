class Group < ActiveRecord::Base
    has_many :posts
    belongs_to :university
    belongs_to :user
    
    validates :desc, presence: true, length: {minimum: 0, maximum: 500}
    validates :groupName, presence: true, length: {minimum: 0, maximum: 500}
end
