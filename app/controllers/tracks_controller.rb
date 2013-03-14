
class TracksController < ApplicationController

  def new
  end

  def index
    client = Soundcloud.new(:client_id => "0a827c5fa306ec5111eaaff88fa203ae")
    @tracks = client.get('/tracks', :genres => params[:search], :limit => 10, :order => 'hotness')
    @track = params[:search]
  end

end
