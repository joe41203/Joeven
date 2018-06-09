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
    return render json: CosmeticSerializer.new(cosmetic).serialize! if cosmetic.save
    render json: { message: 'something wrong' }, status: :unprocessable_entity
  end

  private

  def load_resources
    @cosmetic_store = CosmeticStore.new
  end

  def search_results_json
    cosmetics = Cosmetic.search(params[:query]).records(includes: [images_attachments: :blob]).to_a
    CosmeticSerializer.new(cosmetics).serialize!
  end

  def cosmetic_params
    params.permit(:name, images: [])
  end
end
