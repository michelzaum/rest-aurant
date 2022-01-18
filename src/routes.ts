import { Router } from 'express';
import FoodController from './controllers/FoodController';

export const router = Router();

router.get('/', FoodController.listAll);
