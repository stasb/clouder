Clouder::Application.routes.draw do

  root :to => "tracks#index"

  match ':search', :controller => "tracks", :action => "search", :as => "search"

  resources :tracks

end
