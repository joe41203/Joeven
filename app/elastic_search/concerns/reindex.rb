module Concerns
  module Reindex
    extend ActiveSupport::Concern

    class_methods do
      def reindex!
        __elasticsearch__.client.indices.delete index: index_name
        __elasticsearch__.create_index! force: true
        import
      end
    end
  end
end
