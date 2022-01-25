import React from "react";
import { CategoryItemContainer, CategoryImage, CategoryName } from "./styles";

type CategoryItemProps  = {
  name: string
  image: string
}

export const CategoryItem: React.FC<CategoryItemProps> = ({ name, image }) => {
  return (
    <CategoryItemContainer>
      <CategoryImage src={image} />
      <CategoryName>
        {name}
      </CategoryName>
    </CategoryItemContainer>
  )
}