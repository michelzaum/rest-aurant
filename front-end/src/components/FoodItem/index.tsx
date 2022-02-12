import { FoodItemContainer, FoodImage, FoodTitle, FoodDescription, FoodPrice } from './styles';

const imagem = "https://images.unsplash.com/photo-1594221708779-94832f4320d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80";

type FoodItemProps = {
  name: string
  description: string
  price: number
  image: string
}

export const FoodItem: React.FC<FoodItemProps> = ({ name, description, price, image }) => {
  return (
    <FoodItemContainer>
      <FoodImage src={imagem} alt={name} />
        <FoodTitle>
          {name}
        </FoodTitle>
        <FoodDescription>
          {description}
        </FoodDescription>
        <FoodPrice>
          {price}
        </FoodPrice>
    </FoodItemContainer>
  )
}