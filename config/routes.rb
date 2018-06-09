Rails.application.routes.draw do

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql'
  end

  resources :cosmetics, only: %i[index create]
  post '/graphql', to: 'graphql#execute'
  root to: 'react#root'
end
