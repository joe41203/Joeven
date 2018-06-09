module ImageHelper
  extend ActiveSupport::Concern

  included do
    has_many_attached :images
  end

  def image_path
    self.images.map do |image|
      Rails.application.routes.url_helpers.rails_blob_url(image, only_path: true)
    end
  end
end
