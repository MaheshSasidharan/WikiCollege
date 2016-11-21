class Group < ActiveRecord::Base
    has_many :posts
    belongs_to :university
end
