# class UsersController < ApplicationController

#   before_filter :set_current_user, :only=> ['show', 'edit', 'update', 'delete']
#   def user_params
#     params.require(:user).permit(:name, :email, :password, :password_confirmation)
#   end
  
#   def show
#   # @user = User.find(params[:id])
#     @user = @current_user
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
  
# end 
class UsersController < ApplicationController
  before_action :get_user, except: [:index, :create]
  respond_to :html, :json

  def index
    @user = User.all
    respond_with(@users) do |format|
      format.json { render :json => @user.as_json }
      format.html
    end
  end

  def edit
    
  end 
  
  def create
    @user = User.new(user_params)
    if @user.save
    #3#<<<<<<< HEAD
      render json: @user.as_json, status: :ok

      flash[:notice] = "Sign up successful! Welcome to WikiCollege"
      redirect_to login_path
    #>>>>>>>d2d20756bace229f870c4073ee876d063387ba6d
    else
      render json: {user: @user.errors, status: :no_content}
    end
  end      

  def show
    respond_with(@user.as_json)
  end

  def update
    if @user.update_attributes(user_params)
      render json: @user.as_json, status: :ok 
    else
      render json: {user: @user.errors, status: :unprocessable_entity}
    end
  end

  def destroy
    @user.destroy
    render json: {status: :ok}
  end

  private

  def user_params
    unless params["user"]["addresses"].blank?
      params["user"]["addresses_attributes"] = params["user"]["addresses"]
      params["user"].delete("addresses")
    end
    params.fetch(:user, {}).permit(:first_name, :last_name, :email, :phone, 
                                   :addresses_attributes => [:id, :street1, :street2, :city, :state, :country, :zipcode, :_destroy, :user_id])
  end

  def get_user
    @user = User.find(params[:id])
    render json: {status: :not_found} unless @user
  end
  def digest(string)
    cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
                                                BCrypt::Engine.cost
    BCrypt::Password.create(string, cost: cost)
  end
end
