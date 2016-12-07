class UsersController < ApplicationController
  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }
  before_filter :user_params, only: [:AddUser]
  before_filter :userlogin_params, only: [:LoginUser]

  def show
    @user = User.find(params[:id])
  end

#   def show
#     @user = User.find(params[:id])
# #   @user = @current_user
#   end

#   def new
#   end

#   def create
#     @user = User.new(user_params)
#     if @user.save
#       flash[:notice] = "Sign up successful! Welcome to Rotten Potatoes"
#       redirect_to login_path
#     else
#       render 'new'
#     end  
#   end  


  def new
        @user = User.new
  end


  def create
    @user = User.new(user_params)
    if @user.save
    else
      render 'new'
    end  
  end

  def LoginUser
    puts userlogin_params[:email]
    user = User.find_by(email: userlogin_params[:email])
    if user && user.authenticate(userlogin_params[:password])
      session[:user_id] = user.id
      render :json => { status: true, currentUser: {name: user.name, email: user.email} }
    else
      render :json => { status: false, msg: "Invalid user" }
    end
  end
    
  def AddUser
    print user_params
    user = User.find_by(email: user_params[:email])
    if user
      render :json => { status: false, msg: "Username is already in user"}
    else
      @user = User.new(user_params)
      if @user.save 
        session[:user_id] = @user.id
        render :json => { status: true, msg: "Your account is successfully created", userId: @user.id }
        #session[:user_id] = @user.id #once they sign up, they are automatically logged in
      else
        render :json => { status: false, msg: "Sorry, we were unable to create your account. Please try again later."}
      end
    end 
  end
  
  def GetUserInfo
    @user = current_user
    if @user
      render :json => { status: true, currentUser: {name: @user.name, email: @user.email} }
    else
      render :json => { status: true }
    end
  end   
  
  def Logout 
    puts session[:user_id]
    session[:user_id] = nil
    render :json => { status: true, msg: "Logged out successfully"}
  end

  def user_params
    params.fetch(:oSaveItem).permit(:name, :email, :password)
  end
  
  def userlogin_params
    params.fetch(:oLoginItem).permit(:email, :password)
  end
  
end  
