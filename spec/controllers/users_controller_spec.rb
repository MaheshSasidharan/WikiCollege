require 'spec_helper'
require 'rails_helper'
describe UsersController do
  render_views
  let(:json) { JSON.parse(response.body) }
  before do
    @current_user = User.create!(name: 'test',
              email: 'test@gmail.com',
              password: 'test123')
  end
  context 'logout user' do
    before do
      get :Logout, format: :json
    end      
    it 'returns a successful 200 response' do
      expect(response).to be_success
    end
  end
  context 'Login user' do
    before do
      post :LoginUser, format: :json , oLoginItem: 
              {email: 'test@gmail.com', password: 'test123' }
    end      
    it 'returns a successful 200 response' do
      expect(response).to be_success
    end
  end
  context 'AddUser' do
    before do
      post :AddUser, format: :json , oSaveItem: 
              {name: 'test1', email: 'test1@gmail.com', password: 'test234' }
      @expected = {
        :status  => true,
        :msg     => "Username is already in user"
      }.to_json        
    end
    it 'should say create user' do
      allow(User).to receive(:find_by).with('test2@gmail.com').and_return(@current_user.email)
      expect(response).to be_success
    end
    # it 'should say user already exists' do
    #   user = User.find_by(email: "test@gmail.com")
    #   print "Hello I am done"
    #   print user.email
    #   if user.name == 'test'
    #     print "Hello I am done"
    #     response.body.should === @expected
    #   end  
    # end  
  end  
  
  context 'GetUserInfo' do
    before do
       get :GetUserInfo, format: :json
       @user = @current_user
    end
    it 'should get user info' do
      expect(@user).to eq @current_user
      expect(response).to be_success
      print response
    end
    it 'should return false' do
    end
  end  
  
end


