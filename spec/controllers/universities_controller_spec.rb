require 'spec_helper'
require 'rails_helper'

describe UniversitiesController do
  render_views
  let(:json) { JSON.parse(response.body) }
  
  context 'GetAllUniversities' do
    before do
      post :GetAllUniversities, format: :json , oFilter: 
              {a: '', b: '' }
    end      
    it 'returns all universities' do
      expect(response).to be_success
    end
  end
  
  
  context 'GetUniversityById' do
    before do
      post :GetUniversityById, {:nId => 1}, format: :json 
      @oUniv = University.create!({:desc => '%3Cp%3EPrinceton, the fourth-oldest college in the United States, is located in the quiet town of Princeton, New Jersey. Within the walls of its historic ivy-covered campus, Princeton offers a number of events, activities and organizations. The Princeton Tigers, members of the Ivy League, are well known for their consistently strong men& 39;s and women& 39;s lacrosse teams. Students live in one of six residential colleges that provide a residential community as well as dining services but have the option to join one of more than 10 eating clubs for their junior and senior years. The eating clubs serve as social and dining organizations for the students who join them. Princeton& 39;s unofficial motto, &quot;In the Nation& 39;s Service and in the Service of All Nations,&quot; speaks to the university& 39;s commitment to community service.%3C/p%3E', :city => 'Princeton',:state => 'NJ',:zip => '08544',:name => 'Princeton University', :collegeType => 'private', :rank => '1',:acceptanceRate => ' 7', :enrollment => ' 5402', :arrTuition => ' 45320'})
    end      
    it 'returns university by ID' do
      allow(University).to receive(:find).with(:nId).and_return('')    
      expect(response).to be_success
    end
  end
  
  context 'GetGroupsByUniversityId' do
    before do
      get :GetGroupsByUniversityId, format: :json 
    end      
    it 'return groups by university Id' do
      expect(response).to be_success
    end
  end
  
  context 'GetPostsByGroupId' do
    before do
      get :GetPostsByGroupId, format: :json 
    end      
    it 'return posts by group Id' do
      expect(response).to be_success
    end
  end
  
  context 'GetCommentsByPostId' do
    before do
      get :GetCommentsByPostId, format: :json 
    end      
    it 'return posts by group Id' do
      expect(response).to be_success
    end
  end
  
  
  
  
  
   context 'AddEditGroup' do
        before do
          post :AddEditGroup, {:oSaveGroup =>  {:id => 1, :universityId => 1, :groupName =>"All Depts", :desc => "This group is for discussions about departments"}} ,
          {:newGroup_params => {:user_id => 1, :groupName =>"All Depts", :desc => "This group is for discussions about departments", :universityId => 1}}
        end  
        it "AddEditGroup" do
            session[:user_id] = 1
        end
        
        before do
          post :AddEditGroup, {:oSaveGroup => {:id =>'' ,:universityId =>'' ,:groupName =>"" ,:desc => ""}} ,
          {:newGroup_params => {:user_id => 1, :groupName =>"All Depts", :desc => "This group is for discussions about departments", :universityId => 1}}
        end
        
        it 'add new group' do
          allow(University).to receive(:AddEditGroup).with(:oSaveGroup)
          post :AddEditGroup, {:id => ""}
          expect(response).to be_success
        end
        
   end
   
   
   context 'AddEditPost' do
        before do
          post :AddEditPost, {:oSavePost =>  {:id => '1', :groupId => '1', :postData => "How is the CS department in this university", :like => '0', :dislike => '0'}} ,
          {:newPost_params => {:user_id => 1, :groupId => '1',:postData =>"How is the CS department in this university",:like => '0', :dislike => '0' }}
        end  
        it "AddEditPost" do
            session[:user_id] = 1
        end
        
        before do
          post :AddEditPost, {:oSavePost => {:id => '', :groupId => '', :postData => "", :like => '', :dislike => ''}} ,
          {:newPost_params => {:user_id => 1, :groupId => '1',:postData =>"How is the CS department in this university",:like => '0', :dislike => '0' }}
        end
        
        it 'add new post' do
          allow(University).to receive(:AddEditPost).with(:oSavePost)
          post :AddEditPost, {:id => ""}
          expect(response).to be_success
        end
        
   end
   
   
   
   context 'AddEditCommentToPost' do
        before do
          post :AddEditCommentToPost, {:oSaveComment =>  {:id => '1', :postId => '1',  :commentData => "How is the CS department in this university", :like => '0', :dislike => '0'}} ,
          {:newComment_params => {:user_id => 1, :post_id => '1',:commentData =>"How is the CS department in this university",:like => '0', :dislike => '0' }}
        end  
        it "AddEditCommentToPost" do
            session[:user_id] = 1
        end
        
        before do
          post :AddEditCommentToPost, {:oSaveComment => {:id => '', :postId => '',  :commentData => "", :like => '', :dislike => ''}} ,
          {:newComment_params => {:user_id => 1, :post_id => '1',:commentData =>"How is the CS department in this university",:like => '0', :dislike => '0' }}
        end
        
        it 'add new post' do
          allow(University).to receive(:AddEditCommentToPost).with(:oSaveComment)
          post :AddEditCommentToPost, {:id => ""}
          expect(response).to be_success
        end
        
   end   
   

   context 'AddEditCommentToPost' do
        before do
          post :AddEditCommentToPost, format: :json , oSaveComment: 
                  {:id => '1', :postId => '1',  :commentData => "How is the CS department in this university", :like => '0', :dislike => '0'}
        end      
        it 'AddEditCommentToPost' do
         allow(University).to receive(:AddEditCommentToPost).with("")   
         expect(response).to be_success
        end
   end  
  
   context 'index' do
        before do
          get :index, format: :json 
        end      
        it 'index' do
         expect(response).to be_success
        end
   end  

   context 'filter' do
        before do
          post :Filter, {:filter => {:fees => {:high => 45000, :low => 20000}, :rank => {:high => 5, :low => 1}, :states => ["NJ", "MA"]}}
        end      
        it 'Filter' do
         expect(response).to be_success
        end
        
        
        before do
          post :Filter, {:filter => {:fees => {:high => '', :low => ''}, :rank => {:high => '', :low => ''}, :states => ["", ""]}}
        end      
        it 'Filter' do
         expect(response).to be_success
        end
        
        before do
          post :Filter, {:filter => {:fees => {:high => 45000, :low => 20000}, :rank => {:high => 5, :low => 1}, :states => ["", ""]}}
        end      
        it 'Filter' do
         expect(response).to be_success
        end
        
        
   end  
   
   
    
end    