require 'spec_helper'
require 'rails_helper'

describe ApplicationHelper do
  describe "current_user" do
    before do
        @current_user = User.create!(name: 'test',
              email: 'test@gmail.com',
              password: 'test123')
    end    
    it "returns the current variable" do
       expect(response).to be_success
    end
  end
end