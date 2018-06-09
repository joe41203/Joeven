class CosmeticsController < ApplicationController
  before_action :load_resources

  def index
    return render json: search_results_json if params[:query].present?
    return render json: @cosmetic_store.fetch_cosmetic_list_json if @cosmetic_store.cache_exist?
    @cosmetic_store.set_cosmetic_list_json
    render json: @cosmetic_store.fetch_cosmetic_list_json
  end

  def create
    return render json: @cosmetic.to_json if @cosmetic.save
    render json: { message: 'something wrong' }, status: :unprocessable_entity
  end

  private

  def load_resources
    case action_name.to_sym
    when :index
      @cosmetic_store = CosmeticStore.new
    when :create
      @cosmetic = Cosmetic.new(cosmetic_params)
    end
  end

  def search_results_json
    cosmetics = Cosmetic.search(params[:query]).records(includes: [images_attachment: :blob]).to_a
    CosmeticSerializer.new(cosmetics).serialize!
  end

  def cosmetic_params
    params.permit(:name, images: [])
  end
end
