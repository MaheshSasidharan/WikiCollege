class Univdept < ActiveRecord::Base
    belongs_to :university
    belongs_to :department
    has_many :courses
end
