class CosmeticsController < ApplicationController
  before_action :load_resources

  def index
    return render json: search_results_json if params[:query].present?
    return render json: @cosmetic_store.fetch_cosmetic_list_json if @cosmetic_store.cache_exist?
    @cosmetic_store.set_cosmetic_list_json
    render json: @cosmetic_store.fetch_cosmetic_list_json
  end

  private

  def load_resources
    @cosmetic_store = CosmeticStore.new
  end

  def search_results_json
    Cosmetic.search(params[:query]).records.to_a.to_json
  end
end
