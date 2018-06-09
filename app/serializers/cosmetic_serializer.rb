class CosmeticSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name

  attribute :images do |object, _params|
    object.image_path
  end

  def serialize!
    return _serializable.map { |h| h[:attributes] }.to_json if _serializable.is_a?(Array)
    _serializable[:attributes].to_json
  end

  private

  def _serializable
    serializable_hash[:data]
  end
end
