class CosmeticsController < ApplicationController
  def index
    cosmetics = Cosmetic.limit(20)
    render json: cosmetics.to_json
  end
end
