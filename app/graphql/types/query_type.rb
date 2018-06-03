Types::QueryType = GraphQL::ObjectType.define do
  name 'Query'
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  field :cosmetics, !types[Types::CosmeticType] do
    argument :query, types.String
    resolve ->(_obj, _args, _ctx) { 
      return Cosmetic.search(_args[:query]).records.to_a if _args[:query]
      return Cosmetic.limit(100)
    }
  end
end
