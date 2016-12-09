require 'spec_helper'
require 'rails_helper'
describe PostsController do
  render_views
  before do
    @post = Post.create!({:id => '1', :group_id => '1', :user_id => '1', :postData => "How is the CS department in this university"})
  end
  
  context 'index' do
     before do
       get :index, format: :json
     end
     it 'should display all posts' do
      expect(response).to be_success
     end   
  end
  
  context 'GetAllPosts' do
    before do
      
    end
    it 'should get all posts' do
      
    end  
    
  end  
  context 'GetAllComments' do
    before do
      
    end
    it 'should get all comments' do
      
    end  
  end 
  context 'GetPostsById' do
    before do
      
    end
    it 'should get post by ID' do
      
    end 
    
  end   
  context 'GetCommentsByPostId' do
    before do
      
    end
    it 'should get comments by postId' do
      
    end 
  end    
  

end  