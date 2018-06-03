class CosmeticsController < ApplicationController
  REDIS_COSMETIC_LIST_KEY = 'cosmetic_list'.freeze
  EXPIRED_TIME = 15.seconds

  before_action :load_resources

  def index
    return render json: search_results_json(params[:query]) if params[:query].present?
    return render json: fetch_redis_cosmetic_list_json if cache_exist?
    set_redis_cosmetic_list_json
    render json: fetch_redis_cosmetic_list_json
  end

  private

  def load_resources
    @redis = Redis.new
  end

  def search_results_json(query)
    Cosmetic.search(params[:query]).records.to_a.to_json
  end

  def fetch_redis_cosmetic_list_json
    @redis.get(REDIS_COSMETIC_LIST_KEY)
  end

  def cache_exist?
    @redis.get(REDIS_COSMETIC_LIST_KEY).present?
  end

  def set_redis_cosmetic_list_json
    @redis.set(REDIS_COSMETIC_LIST_KEY, Cosmetic.limit(100).to_json)
    @redis.expire(REDIS_COSMETIC_LIST_KEY, EXPIRED_TIME)
  end
end
