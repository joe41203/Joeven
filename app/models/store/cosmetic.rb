module Store
  class Cosmetic
    REDIS_COSMETIC_LIST_KEY = 'cosmetic_list'.freeze
    EXPIRED_TIME = 15.seconds
    LIMIT = 100

    def initialize
      @redis = Redis.new
    end

    def fetch_cosmetic_list_json
      @redis.get(REDIS_COSMETIC_LIST_KEY)
    end

    def cache_exist?
      @redis.get(REDIS_COSMETIC_LIST_KEY).present?
    end

    def set_cosmetic_list_json
      @redis.set(REDIS_COSMETIC_LIST_KEY, ::Cosmetic.limit(LIMIT).to_json)
      @redis.expire(REDIS_COSMETIC_LIST_KEY, EXPIRED_TIME)
    end
  end
end
