import { useEffect, useState } from 'react';
import { CategoryItem } from '../CategoryItem';

import { CategoryListContainer } from './styles';

import { getAllCategories } from '../../services/category';

type CategoryListItem = {
  category_id: string
  name: string
  image: string
}

export const CategoryList = () => {
  const [category, setCategory] = useState<[CategoryListItem]>([{
    category_id: '',
    name: '',
    image: ''
  }]);

  const handleCategories = async () => {
    const categories = await getAllCategories();
    setCategory(categories);
  }

  useEffect(() => {
    handleCategories();
  }, [])

  return (
    <CategoryListContainer>
      {
        category.map(item => (
          <CategoryItem 
            key={item.category_id}
            name={item.name}
            image={item.image}
          />
        ))
      }
    </CategoryListContainer>
  )
};