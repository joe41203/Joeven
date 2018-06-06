class CosmeticsController < ApplicationController
  before_action :load_resources

  def index
    return render json: search_results_json if params[:query].present?
    return render json: @cosmetic_store.fetch_cosmetic_list_json if @cosmetic_store.cache_exist?
    @cosmetic_store.set_cosmetic_list_json
    render json: @cosmetic_store.fetch_cosmetic_list_json
  end

  def create
    cosmetic = Cosmetic.new(cosmetic_params)
    return redirect_to cosmetics_path if cosmetic.save
    redirect_to cosmetics_path, notice: 'something wrong'
  end

  private

  def load_resources
    @cosmetic_store = CosmeticStore.new
  end

  def search_results_json
    Cosmetic.search(params[:query]).records.to_a.to_json
  end

  def cosmetic_params
    params.permit(:name, images: [])
  end
end
