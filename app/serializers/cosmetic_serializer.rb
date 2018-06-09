class CosmeticSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name

  attribute :images do |object, _params|
    object.image_path
  end

  def serialize!
    return serializable.map { |h| h[:attributes] }.to_json if serializable.is_a?(Array)
    serializable[:attributes].to_json
  end

  private

  def serializable
    serializable_hash[:data]
  end
end
