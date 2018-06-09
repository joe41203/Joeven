class Cosmetic < ApplicationRecord
  include CosmeticSearchable
  include ImageHelper

  validates :name, presence: true
end
