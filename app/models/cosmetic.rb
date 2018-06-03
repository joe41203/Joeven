class Cosmetic < ApplicationRecord
  include CosmeticSearchable

  validates :name, presence: true
end
