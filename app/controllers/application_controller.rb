class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?
  def current_user
     @current_user ||= User.find(session[:user_id]) if session[:user_id] 
     #memoisation => "||="   ........ 
     #if new user, it will go to database ... else if you are in same page, it will take from current user
     
  end
  
  
  def logged_in?
      !!current_user 
      # if current user is logged in or not
  end
  
  def require_user
    if !logged_in?
      #add actions that are needed
      render :json => { status: false, msg: "Should stay in same page and display error msg" }
    end
  end  
end