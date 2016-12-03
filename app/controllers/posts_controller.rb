class PostsController < ApplicationController
   
   before_action :set_post, only: [:edit, :update, :show, :like]
   before_action :require_user, except: [:show, :index] #only logged in user can create new post, this method is defined in application controller, so it is available to entire app
   before_action :require_same_user, only: [:edit, :update]
   
   
   def index
    #instance variable, so it wil be available in view
    #@posts = Post.all.sort_by{|like| like.thumbs_up_total}.reverse  
    #@posts = Post.paginate(page: params[:page], per_page: 5)
     @post = Post.all
     render json: @post
   end
     
   def show
    #binding.pry #making use of gem pry which was added
    respond_with(@post.as_json)
    redirect_to post_path
   end
   
   
   def new 
    @post = Post.new
   end
   
   def create
    
    #binding.pry .. In console ...params ... this will tell what all we are getting
    @post = Post.new(post_params) #match the signature and will take data to new create new post
    @post.chef = current_user
    
      if @post.save
        flash[:success] = "Your Post was create successfully"
        #redirect_to posts_path
      else
        render :new 
      end
    
   end
   
   
   def edit
       
   end
   
   
   def update
      if @post.update(post_params)
        flash[:success] = "Your post was updated successfully"
        redirect_to posts_path(@post)
      else
        render :edit
      end
   end
   
   
   def like
    #binding.pry
   
    like = Like.create(like: params[:like], user: current_user, post: @post) #will set like = true
        if like.valid?
            flash[:success] = "Your selection was successful"
            redirect_to :back #will redirect back to same page 
        else
            flash[:danger] = "You can only like/dislike a post once"
            redirect_to :back
        end
   end
   
   
   private 
    
    def  post_params 
      params.require(:post).permit(:postData)
    end
    
    def set_post
      @post = Post.find(params[:id])
    end
    
    def require_same_user
        if current_user != @post.user
          flash[:danger] = "You can only edit your own post"
          redirect_to posts_path
        end
    end
    
    
#   protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }
  
#   before_filter :univ_params, only: [:TestPost]
#   before_filter :Params_GetAllUniversities, only: [:GetAllUniversities]
  
#   respond_to :json
  
#   def GetAllUniversities
#     @arrUniversities = University.all
#     render :json => { arrUniversities: @arrUniversities, params: params[:oFilter].as_json}
#   end
    
    def GetAllPosts
     @arrPosts = Post.all   
     render :json => { arrPosts: @arrPosts, params: params[:oFilter].as_json}
    end
  
  
    def GetAllComments
     @arrComments = Comment.all
     render :json => { arrPosts: @arrPosts, params: params[:oFilter].as_json}
    end
    
#   def GetUniversityById
#     @oUniv = University.find(params[:nId])
#     if (!@oUniv.nil?) 
#       render :json => { status: true, oUniv: @oUniv }
#     else
#       render :json => { status: false, msg: "Failed to find University" }
#     end
#   end
    
    def GetPostsById
      @oPost = Post.find(params[:nId])
     if (!@oPost.nil?) 
       render :json => { status: true, oPost: @oPost }
     else
       render :json => { status: false, msg: "Failed to find Posts" }
     end
    end
#   def GetGroupsByUniversityId
#     @arrGroups = Group.where(university_id: params[:nId])
#     if (!@arrGroups.nil?) 
#       render :json => { status: true, arrGroups: @arrGroups }
#     else
#       render :json => { status: false, msg: "Failed to find groups by UniversityId" }
#     end
#   end
  
#   def GetPostsByGroupId
#     @arrPosts = Post.where(group_id: params[:nId])
#     if (!@arrPosts.nil?) 
#       render :json => { status: true, arrPosts: @arrPosts }
#     else
#       render :json => { status: false, msg: "Failed to find groups by UniversityId" }
#     end
#   end
  
  
    def GetCommentsByPostId
      @arrComments = Comment.where(post_id: params[:nId])
      if(!arrComments.nil?)
          render :json => { status: true, arrComments: @arrComments}
      else
          render :json => { status: false, msg: "Failed to find Comments by PostId"}
      end
    end    
  
#   def show
#     #respond_with(@university.as_json)
#     #redirect_to university_path
#   end
#   def index
#     @university = University.all
#     render json: @university
#   end  
  
#   def testme2
#     puts params[:nUnivId]
#     #respond_to do |format|
#       msg = { :status => "ok", :message => params[:nUnivId], :html22 => "<b>...</b>" }
#       render :json => msg  # don't do msg.to_json
#     #end
#   end
  
#   def TestPost
#     puts params[:oSaveItem]
#     #respond_to do |format|
#       msg = { :status => "ok", :message => params["oSaveItem"].as_json, :html => "<h1>...</h1>" }
#       render :json => msg  # don't do msg.to_json
#     #end
#   end
  
#   def SearchCity
#     puts params[:sCity]
#     if params[:sCity]
#       @arrUniversities = University.search(params[:sCity])
#       render :json => { status: true, arrUniversities: @arrUniversities }
#     else
#       render :json => { status: false, msg: "No City name provided" }
#     end
#   end
  
#   def univ_params
#     params.fetch(:oSaveItem).permit(:a, :b)
#   end
  
#   def Params_GetAllUniversities
#     params.fetch(:oFilter).permit(:a, :b)
#   end
  
  
end    