class Cosmetic < ApplicationRecord
  include CosmeticSearchable

  has_many_attached :images

  validates :name, presence: true

  class <<  self
    def refresh_index!
      self.__elasticsearch__.client.indices.delete index: self.index_name
      self.__elasticsearch__.create_index! force: true
      self.import
    end
  end
end
