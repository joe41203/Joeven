class CosmeticStore
  REDIS_COSMETIC_LIST_KEY = 'cosmetic_list'.freeze
  EXPIRED_TIME = 15.seconds
  LIMIT = 100

  def initialize
    @redis = Redis.new
  end

  def set_cosmetic_list_json
    cosmetics = Cosmetic.with_included_image.limit(LIMIT)
    @redis.set(REDIS_COSMETIC_LIST_KEY, CosmeticSerializer.new(cosmetics).serialize)
    @redis.expire(REDIS_COSMETIC_LIST_KEY, EXPIRED_TIME)
  end

  [REDIS_COSMETIC_LIST_KEY].each do |key|
    define_method "#{key}_cache_exist?" do
      @redis.get(key).present?
    end
    define_method "fetch_#{key}_json" do
      @redis.get(key)
    end
  end
end
