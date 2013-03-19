
class TracksController < ApplicationController

  def new
  end

  def index
    client = Soundcloud.new(:client_id => "f837b00cd8d79383183d405b33a8a25d")
    @tracks = client.get('/tracks', :genres => params[:search], :limit => 10, :order => 'hotness')
    @track = params[:search]
  end

end
