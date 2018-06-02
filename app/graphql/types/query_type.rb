Types::QueryType = GraphQL::ObjectType.define do
  name 'Query'
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  field :allCosmetics, !types[Types::CosmeticType] do
    resolve ->(_obj, _args, _ctx) { Cosmetic.all }
  end
end
