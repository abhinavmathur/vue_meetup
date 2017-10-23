Rails.application.routes.draw do
  root 'app#index'
  # Route to hit the Vue app
    get '/', to: 'app#index', format: false

    get '/*path', to: 'app#index', format: false
end
