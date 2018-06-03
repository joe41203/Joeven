require 'elasticsearch/model'

module ElasticSearch
  module CosmeticSearchable
    extend ActiveSupport::Concern

    included do
      include Elasticsearch::Model
      include Elasticsearch::Model::Callbacks

      after_save    { logger.debug ['Updating document... ', __elasticsearch__.index_document].join }
      after_destroy { logger.debug ['Deleting document... ', __elasticsearch__.delete_document].join }

      index_name "cosmetic_#{Rails.env}"

      settings do
        mappings dynamic: 'false' do
          indexes :name, type: 'text'
        end
      end
    end
  end
end
