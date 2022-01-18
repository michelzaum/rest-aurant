import { Request, Response } from "express";

const foods = require('../mock/food_mock.json');

class FoodController {
  listAll(request: Request, response: Response) {
    response.json(foods);
  }
}

export default new FoodController();