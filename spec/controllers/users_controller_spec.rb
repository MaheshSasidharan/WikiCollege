require 'spec_helper'
require 'rails_helper'

describe UsersController do
  render_views
  let(:json) { JSON.parse(response.body) }
  describe "User specs" do
      context 'logout user' do
           before do
              get :Logout, format: :json
           end      
           it 'returns a successful 200 response' do
             expect(response).to be_success
          end
      end    
      context 'Add user' do
           before do
              post :AddUser, format: :json, oSaveItem: 
              { name: 'abcd', email: 'abcd@wikicollege.com', password: 'wikiadmin123' }
              @fake_results = [double('user')]
           end      
           it 'returns a user' do
             allow(User).to receive(:find_by).with('abcd@wikicollege.com').and_return(@fake_results)
             expect(@fake_results).to_not be_nil
             expect(response).to be_success
           end
           
           it 'assigns user to @user' do
             allow(User).to receive(:find_by).with('').and_return([])
             User.stub(:save)
             expect(assigns(:user)).to be_kind_of ActiveRecord::Base
           end   
           it 'doesnt save the user' do
              expect(response).to be_success
           end
      end
       
  end     
  describe 'GetUserInfo' do
       before do
          post :GetUserInfo, format: :json
          @current_user = User.create!({ name: 'abcd', email: 'abcd@wikicollege.com', password: 'wikiadmin123' })
       end
       it 'assigns user to @user' do
          @user = @current_user
          puts "I am done"
          puts @user.name
          expect(response).to be_success
       end  
       it 'doesnt assign @user' do
          @user = @user1
          expect(@user).to eq nil
          expect(response).to be_success
       end  
  end
end