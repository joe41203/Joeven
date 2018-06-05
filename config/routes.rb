Rails.application.routes.draw do

  resources :cosmetics, only: %i[index create]
  post '/graphql', to: 'graphql#execute'
  root to: 'react#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql'
  end
end
