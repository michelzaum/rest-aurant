import { FoodItemContainer, FoodImage, FoodTitle, FoodDescription, FoodPrice } from './styles';

const imagem = "https://images.unsplash.com/photo-1594221708779-94832f4320d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80";

export const FoodItem = () => {
  return (
    <FoodItemContainer>
      <FoodImage src={imagem} alt="Frango assado" />
        <FoodTitle>
          Frango assado
        </FoodTitle>
        <FoodDescription>
          Frango assado com molho barbecue, acompanhado de alface e salpicão.
        </FoodDescription>
        <FoodPrice>
          R$27,90
        </FoodPrice>
    </FoodItemContainer>
  )
}