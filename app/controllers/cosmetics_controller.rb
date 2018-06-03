class CosmeticsController < ApplicationController
  before_action :load_resources

  def index
    return render json: search_results_json if params[:query].present?
    return render json: @redis_cosmetic.fetch_cosmetic_list_json if @redis_cosmetic.cache_exist?
    @redis_cosmetic.set_cosmetic_list_json
    render json: @redis_cosmetic.fetch_cosmetic_list_json
  end

  private

  def load_resources
    @redis_cosmetic = Store::Cosmetic.new
  end

  def search_results_json
    Cosmetic.search(params[:query]).records.to_a.to_json
  end
end
