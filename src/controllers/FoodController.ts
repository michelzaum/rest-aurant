import { Request, Response } from "express";
import foods from '../mock/food_mock.js';

class FoodController {
  listAll(request: Request, response: Response) {
    response.json(foods);
  }

  findFood(request: Request, response: Response) {
    const { id } = request.params;
    const food = foods.find(food => food.food_id === Number(id));
    
    response.json(food);
  }
}

export default new FoodController();