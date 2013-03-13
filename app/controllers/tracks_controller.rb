class TracksController < ApplicationController

  def new
  end

  def search
    client = Soundcloud.new(:client_id => "0a827c5fa306ec5111eaaff88fa203ae")
    @tracks = client.get('/tracks', :genres => 'trap', :limit => 10, :order => 'hotness')
    @track = params[:search]
  end

  def index
  end

end
