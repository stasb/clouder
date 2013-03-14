Clouder::Application.routes.draw do

  root :to => "tracks#new"

  # match ':search', :controller => "tracks", :action => "index", :as => "index"

  resources :tracks

end
