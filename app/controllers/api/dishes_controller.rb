class Api::DishesController < ApplicationController
  before_action :set_dish, only: [ :destroy, :update, :show ]

  def index
    render json: Dish.all
  end

  def show
    render json: @dish
  end

  def update
    if @dish.update(dish_params)
      render json: @dish
    else
      render json: { errors: @dish.errors.full_messages }, status: 422
    end
  end

  def create
    dish = Dish.new(dish_params)
    if dish.save
      render json: dish
    else
      render json: { errors: dish.errors.full_messages }, status: 422
    end
  end

  def destroy
    @dish.destroy
  end

  private
    def dish_params
      params.require(:dish).permit(
        :dish, :price,
        :category, :description,
        :incart
      )
    end

    def set_dish
      @dish = Dish.find(params[:id])
    end
end
