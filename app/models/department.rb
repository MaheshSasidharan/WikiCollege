class Department < ActiveRecord::Base
  has_many :univdepts
  has_many :universities, through: :univdepts , :source => :university
end
