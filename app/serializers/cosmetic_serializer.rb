class CosmeticSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name

  attribute :images do |object, _params|
    object.image_path
  end

  def serialize!
    serializable_hash[:data].map { |h| h[:attributes] }.to_json
  end
end
