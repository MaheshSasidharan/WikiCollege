require 'spec_helper'
require 'rails_helper'

describe PostsController do
  render_views
  let(:json) { JSON.parse(response.body) }
  describe "GET /posts.json" do
      before do
        get :index, format: :json
      end
    
      context 'all posts' do
        it 'returns the posts' do
          expect(json.collect{|l| l["postData"]}).to_not be_nil
        end
      end
      context 'post details with given id' do
          before do
            get :show, format: :json, id: 1
          end
        
          it 'returns the posts' do
            expect(json.collect{|l| l["like"]}).to_not be_nil
          end
      end
  end      
end  