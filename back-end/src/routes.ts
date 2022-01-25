import { Router } from 'express';
import CategoryController from './controllers/CategoryController';
import FoodController from './controllers/FoodController';

const router = Router();

router.get('/foods', FoodController.listAll);
router.get('/foods/:id', FoodController.findFood);

router.get('/categories', CategoryController.listAll);

export default router;