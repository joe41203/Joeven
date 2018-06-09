class Cosmetic < ApplicationRecord
  include CosmeticSearchable
  include ImageHelper

  validates :name, presence: true

  class <<  self
    def refresh_index!
      __elasticsearch__.client.indices.delete index: index_name
      __elasticsearch__.create_index! force: true
      import
    end
  end
end
