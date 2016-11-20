class University < ActiveRecord::Base
  has_many :univdepts
  has_many :departments, through: :univdepts
  has_many :groups
  
  def self.search(search)
    where("city LIKE ?", "%#{search}%")
  end
  
end
