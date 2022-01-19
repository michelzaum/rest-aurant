import { Router } from 'express';
import FoodController from './controllers/FoodController';

const router = Router();

router.get('/foods', FoodController.listAll);
router.get('/foods/:id', FoodController.findFood);

export default router;