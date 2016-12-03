class UniversitiesController < ApplicationController
  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }
  
  before_filter :univ_params, only: [:TestPost]
  before_filter :Params_GetAllUniversities, only: [:GetAllUniversities]
  before_filter :comment_params, only: [:AddCommentToPost]
  
  respond_to :json
  
  def GetAllUniversities
    @arrUniversities = University.all
    render :json => { arrUniversities: @arrUniversities, params: params[:oFilter].as_json}
  end
  
  def GetUniversityById
    @oUniv = University.find(params[:nId])
    if (!@oUniv.nil?) 
       render :json => { status: true, oUniv: @oUniv }
    else
      render :json => { status: false, msg: "Failed to find University" }
    end
  end
  
  def GetGroupsByUniversityId
    @arrGroups = Group.where(university_id: params[:nId])
    if (!@arrGroups.nil?) 
       render :json => { status: true, arrGroups: @arrGroups }
    else
      render :json => { status: false, msg: "Failed to find groups in this University" }
    end
  end
  
  def GetPostsByGroupId
    @arrPosts = Post.where(group_id: params[:nId])
    if (!@arrPosts.nil?) 
       render :json => { status: true, arrPosts: @arrPosts }
    else
      render :json => { status: false, msg: "Failed to find posts under this group" }
    end
  end
  
  def GetCommentsByPostId
    @arrComments = Comments.where(post_id: params[:nId])
    if (!@arrPosts.nil?) 
       render :json => { status: true, arrComments: @arrComments }
    else
      render :json => { status: false, msg: "Failed to find comments under this Post" }
    end
  end
  
  def AddCommentToPost
    user = Comment.find_by(email: params[:email])
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
  
  def show
    #respond_with(@university.as_json)
    #redirect_to university_path
  end
  def index
    @university = University.all
    render json: @university
  end  
  
  def testme2
    puts params[:nUnivId]
    #respond_to do |format|
      msg = { :status => "ok", :message => params[:nUnivId], :html22 => "<b>...</b>" }
      render :json => msg  # don't do msg.to_json
    #end
  end
  
  def TestPost
    puts params[:oSaveItem]
    #respond_to do |format|
      msg = { :status => "ok", :message => params["oSaveItem"].as_json, :html => "<h1>...</h1>" }
      render :json => msg  # don't do msg.to_json
    #end
  end
  
  def SearchCity
    puts params[:sCity]
    if params[:sCity]
      @arrUniversities = University.search(params[:sCity])
      render :json => { status: true, arrUniversities: @arrUniversities }
    else
      render :json => { status: false, msg: "No City name provided" }
    end
  end
  
  def univ_params
    params.fetch(:oSaveItem).permit(:a, :b)
  end
  
  def Params_GetAllUniversities
    params.fetch(:oFilter).permit(:a, :b)
  end
  
  def comment_params
    params.fetch(:oSaveItem).permit(:text)
  end
end    