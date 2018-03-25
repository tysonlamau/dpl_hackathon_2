50.times do
  dish = Faker::Food.dish
  price = Faker::Number.decimal(2)
  category = Faker::Food.dish
  description = Faker::Food.description
 Dish.create(dish: dish, price: price, category: category, description: description )
end