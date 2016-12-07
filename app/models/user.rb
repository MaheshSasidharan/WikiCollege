class User < ActiveRecord::Base
 
  #has_many :likes  
  has_many :posts
  has_many :comments
  has_many :groups
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  # devise :database_authenticatable, :registerable,
  #       :recoverable, :rememberable, :trackable, :validatable
  
  
  before_save { self.email = email.downcase} # making email downcase before saving it
  validates :name, presence:  true, length: {minimum: 3, maximum: 40}
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: {maximum: 100},
                                    uniqueness: {case_sensitive: false},
                                    format: {with: VALID_EMAIL_REGEX}
  has_secure_password
  # before_save {|user| user.email=user.email.downcase}
  # before_save :create_session_token
  # validates :name, presence: true, length: {minimum: 3, maximum: 50}
  # VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  # validates :email, presence: true, length: {maximum: 105},
  #                                   uniqueness: {case_sensitive: false},
  #                                   format: {with: VALID_EMAIL_REGEX}
  #validates :password, presence: true, length: {minimum: 6}
  #validates :password_confirmation, presence: true
private
  def create_session_token
    #self.session_token = SecureRandom.urlsafe_base64
  end

  
end

