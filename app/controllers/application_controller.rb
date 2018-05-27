class ApplicationController < ActionController::API
  rescue_from StandardError, with: :internal_server_error unless Rails.env.development?
  rescue_from ActiveRecord::RecordNotFound, with: :not_found unless Rails.env.development?

  private

  def internal_server_error(error = nil)
    return render json: { message: 'Internal Server Error' }, status: :internal_server_error if error.nil?
    render json: { message: error.full_message }, status: :internal_server_error
  end

  def not_found(error = nil)
    return render json: { message: 'Record Not Found' }, status: :not_found if error.nil?
    render json: { message: error.full_message }, status: :not_found
  end
end
