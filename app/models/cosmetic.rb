class Cosmetic < ApplicationRecord
  include ElasticSearch::CosmeticSearchable

  validates :name, presence: true
end
