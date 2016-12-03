class UsersController < ApplicationController
  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }
  before_filter :user_params, only: [:AddUser]

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

  def CheckUserValid
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      render :json => { status: true, msg: "Successfully logged in" }
    else
      render :json => { status: false, msg: "Invalid user" }
    end
  end
    
    
  def AddUser
    print params
    user = User.find_by(email: params[:email])
    if user
      render :json => { status: false, msg: "Username is already in user"}
    else
      @user = User.new(user_params)
      if @user.save 
          render :json => { status: true, msg: "Your account is successfully created", userId: @user.id }
          #session[:user_id] = @user.id #once they sign up, they are automatically logged in
      else
          render :json => { status: false, msg: "Sorry, we were unable to create your account. Please try again later."}
      end
    end 
  end
  
  def destroy 
     #session[:user_id] = nil
     @user = nil
     render :json => { status: true, msg: "Logged out successfully"}
  end

  def user_params
    params.fetch(:oSaveItem).permit(:name, :email, :password_digest)
  end

end  
