Rails.application.routes.draw do

  mount Ckeditor::Engine => '/ckeditor'
  devise_for :users, :controllers => { :sessions => 'users/sessions', registrations: 'registrations' }, :path_prefix => ''
  # scope "/admin" do
  #   resources :users
  # end
  resources :contacts
  resources "touchs", only: [:new, :create]
  resources :users
  namespace :admin do
    resources :users
  end

  get 'home/home'
  get 'home/about'
  get 'home/sitemap'
  get 'home/amp'

  namespace :blogs do
    get '/' => 'toppage#index'
    get ':name' => 'categories#show', as: 'category_show'
    resources :categories
    resources :posts do
      resources :comments
    end
    get ':seo_name/:id' => 'posts#show', as: 'post_detail'
  end

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'home#home'

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
