class CosmeticSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name

  attribute :images, &:image_path

  def serialize!
    serializable_hash[:data].map { |h| h[:attributes] }.to_json
  end
end
