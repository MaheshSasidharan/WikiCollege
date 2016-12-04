class UniversitiesController < ApplicationController
  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }
  
  before_filter :univ_params, only: [:TestPost]
  before_filter :Params_GetAllUniversities, only: [:GetAllUniversities]
  before_filter :comment_params, only: [:AddEditCommentToPost]
  
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
    puts session[:user_id]
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
    @arrComments = Comment.where(post_id: params[:nId])
    if (!@arrComments.nil?) 
       render :json => { status: true, arrComments: @arrComments }
    else
      render :json => { status: false, msg: "Failed to find comments under this Post" }
    end
  end
  
  def AddEditCommentToPost
    if(comment_params[:id].nil? || comment_params[:id] == -1)
      # Add new comment
      newComment_params = Hash.new
      newComment_params['user_id'] = session[:user_id]
      newComment_params['post_id'] = comment_params[:postId]
      newComment_params['commentData'] = comment_params[:commentData]
      newComment_params['like'] = comment_params[:like]
      newComment_params['dislike'] = comment_params[:dislike]
      
      @comment = Comment.new(newComment_params)
      if @comment.save
        render :json => { status: true, commentId: @comment.id, sType: 'CommentAdded' }
      else
        render :json => { status: false, sType: 'CommentAddFailed'}
      end
    else
      # Edit comment
      @commentsUpdated = Comment.where(:id => comment_params[:id]).update_all(commentData: comment_params[:commentData], like: comment_params[:like], dislike: comment_params[:dislike])
      print @commentsUpdated
      if @commentsUpdated > 0
        puts @comment
        render :json => { status: true, sType: 'CommentUpdated' }
      else
        render :json => { status: false, sType: 'CommentUpdateFailed'}
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
    params.fetch(:oSaveComment).permit(:commentData, :postId, :id, :like, :dislike)
  end
end    