Rails.application.routes.draw do

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  resources :users

  root 'users#index'
  #abcd 'users#testme'
  get 'testme' => 'users#testme'
  
  #route for likes for the post
  resources :post do
    member do
      post 'like'
    end
  end

  #UNIVERSITY
  resources :universities
  get 'university/testme2' => 'universities#testme2'
  get 'university/GetUniversityById' => 'universities#GetUniversityById'
  get 'university/GetGroupsByUniversityId' => 'universities#GetGroupsByUniversityId'
  get 'university/GetPostsByGroupId' => 'universities#GetPostsByGroupId'
  get 'university/GetCommentsByPostId' => 'universities#GetCommentsByPostId'

  post 'university/GetAllUniversities' => 'universities#GetAllUniversities'
  post 'university/TestPost' => 'universities#TestPost'
  
  post 'university/AddEditGroup' => 'universities#AddEditGroup'
  post 'university/AddEditPost' => 'universities#AddEditPost'
  post 'university/AddEditCommentToPost' => 'universities#AddEditCommentToPost'
  
  get 'users/Logout' => 'users#Logout'
  post 'users/AddUser' => 'users#AddUser'
  post 'users/LoginUser' => 'users#LoginUser'
  
  get 'university/SearchCity' => 'universities#SearchCity'
  
  
  # --- resources :sessions, only: [:new, :create, :destroy]
  # ---match '/signup', to: 'users#new', via: :get
  # --- match '/login',  to: 'sessions#new', via: :get
  # --- match '/logout', to: 'sessions#destroy', via: :delete

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
