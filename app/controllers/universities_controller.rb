class UniversitiesController < ApplicationController
    
  def show
    #respond_with(@university.as_json)
    #redirect_to university_path
  end
  def index
   # @university = University.all
    #respond_with(@universities) do |format|
      #format.json { render :json => @university.as_json }
      #format.html
    #end

  end  
    
end    