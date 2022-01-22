import { CategoryItemContainer, CategoryImage, CategoryName } from "./styles";

export const CategoryItem = () => {
  return (
    <CategoryItemContainer>
      <CategoryImage src="https://images.unsplash.com/photo-1594221708779-94832f4320d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
      <CategoryName>
        Frango
      </CategoryName>
    </CategoryItemContainer>
  )
}