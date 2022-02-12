import { useState, useEffect } from 'react';
import { FoodListContainer } from './styles';

import { FoodItem } from '../FoodItem';
import { getAllFoods } from '../../services/food';

type FoodListItem = {
  name: string
  description: string
  price: number
  image: string
}

export const FoodList = () => {
  const [food, setFood] = useState<[FoodListItem]>([{
    name: '',
    description: '',
    price: 0,
    image: ''
  }]);

  const handleFood = async() => {
    const foods = await getAllFoods();
    setFood(foods);
  }

  useEffect(() => {
    handleFood();
  }, [])

  return (
    <FoodListContainer>
      {
        food.map(item => (
          <FoodItem 
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))
      }
    </FoodListContainer>
  )
}