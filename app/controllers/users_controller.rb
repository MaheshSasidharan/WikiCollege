class UsersController < ApplicationController
  #before_filter :set_current_user, :only=> ['show', 'edit', 'update', 'delete']
  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
  
  def show
    @user = User.find(params[:id])
  end

  def new
  end

  def create
    @user = User.new(user_params)
    if @user.save
    else
      render 'new'
    end  
  end
end  
