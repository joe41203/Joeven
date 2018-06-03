class CosmeticsController < ApplicationController
  def index
    @cosmetics = Cosmetic.search(params[:query]).records.to_a if params[:query]
    @cosmetics ||= Cosmetic.limit(100)
    render json: @cosmetics.to_json
  end
end
