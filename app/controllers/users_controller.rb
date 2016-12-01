class UsersController < ApplicationController
  #before_filter :set_current_user, :only=> ['show', 'edit', 'update', 'delete']
  def user_params
    params.require(:user).permit(:userName, :email, :password)
  end
  

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
    user = User.find_by(email: params[:email])
    if user
      render :json => { status: false, msg: "Username is already in user"}
    else
      @user = User.new(user_params)
      if @user.save 
          render :json => { status: true, msg: "Your account is successfully created"}
          #session[:user_id] = @user.id #once they sign up, they are automatically logged in
      else
          render :json => { status: false, msg: "Error occurred. Please try again later"}
      end
    end 
  end
  
  def destroy 
     #session[:user_id] = nil
     @user = nil
     render :json => { status: true, msg: "Logged out successfully"}
  end


end  
