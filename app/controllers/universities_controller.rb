class UniversitiesController < ApplicationController
  respond_to :json  
  def show
    #respond_with(@university.as_json)
    #redirect_to university_path
  end
  def index
    @university = University.all
    print "Print the response.............", University.all
    render json: @university
    # respond_with(@universities) do |format|
    #   format.json { render :json => @university.as_json }
    #   format.html
    # end

  end  
    
end    