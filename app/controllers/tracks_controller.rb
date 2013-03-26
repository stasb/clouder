
class TracksController < ApplicationController

  def new
  end

  def index
    page_size = 48
    client = Soundcloud.new(:client_id => "f837b00cd8d79383183d405b33a8a25d")
    @query = params[:search]
    @current_page = params[:page]
    if @current_page == nil
      @tracks = client.get('/tracks', :genres => params[:search], :streamable => 'true', :limit => page_size, :order => 'hotness')
    else
      offset = (@current_page.to_i - 1) * page_size
      @tracks = client.get('/tracks', :genres => params[:search], :streamable => 'true', :limit => page_size, :order => 'hotness', :offset => offset)
    end
  end

end
