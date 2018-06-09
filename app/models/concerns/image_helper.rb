module ImageHelper
  extend ActiveSupport::Concern

  included do
    has_many_attached :images
    scope :with_eager_loaded_image, -> { eager_load(images_attachments: :blob) }
    scope :with_preloaded_image, -> { preload(images_attachments: :blob) }
  end

  def image_path
    images.map do |image|
      'localhost:3000' + Rails.application.routes.url_helpers.rails_blob_url(image, only_path: true)
    end
  end
end
