# defines a new GraphQL type
Types::CosmeticType = GraphQL::ObjectType.define do
  # this type is named `Link`
  name 'Cosmetic'

  # it has the following fields
  field :id, !types.ID
  field :name, !types.String
end