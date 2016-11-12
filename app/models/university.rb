class University < ActiveRecord::Base
  has_many :univdepts
  has_many :departments, through: :univdepts
  has_many :groups
end
