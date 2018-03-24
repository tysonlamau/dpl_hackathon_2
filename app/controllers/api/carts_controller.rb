class Api::CartsController < ApplicationController
  before_action :set_cart, only: [ :destroy, :update, :show ]

  def index
    render json: Cart.all
  end

  def show
    render json: @cart
  end

  def update
    if @cart.update(cart_params)
      render json: @cart
    else
      render json: { errors: @cart.errors.full_messages }, status: 422
    end
  end

  def create
    cart = Cart.new(cart_params)
    if cart.save
      render json: cart
    else
      render json: { errors: cart.errors.full_messages }, status: 422
    end
  end

  def destroy
    @cart.destroy
  end

  private
    def cart_params
      params.require(:dish).permit(:dish_id)
    end

    def set_cart
      @cart = Cart.find(params[:id])
    end
end
