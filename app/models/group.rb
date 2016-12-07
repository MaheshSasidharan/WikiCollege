class Group < ActiveRecord::Base
    has_many :posts
    belongs_to :university
    belongs_to :user
    
    validates :desc, presence: true, length: {minimum: 5, maximum: 50}
    validates :groupName, presence: true, length: {minimum: 3, maximum: 15}
end
