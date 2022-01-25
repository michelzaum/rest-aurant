import { Request, Response } from 'express';
import categories from '../mock/category_mock';

class CategoryController {
  async listAll(request: Request, response: Response) {
    response.json(categories);
  }
}

export default new CategoryController();