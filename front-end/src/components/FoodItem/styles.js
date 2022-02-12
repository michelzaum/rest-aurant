import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const FoodItemContainer = styled.div`
  min-height: 5rem;
  max-height: 15rem;
  width: 28rem;
  display: grid;
  grid-template-columns: 40% 1fr;
  grid-template-rows: 1fr 3fr 1fr;
  column-gap: 1rem;
  padding: 0.5rem 1rem;
  align-items: center;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
  border: 1px solid ${colors.dark};
  border-radius: 10px;
  
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const FoodImage = styled.img`
  height: 90%;
  width: 90%;
  grid-column: 1;
  grid-row: 1/4;
  border-radius: 10px;
  border: 1px solid ${colors.dark};
`;

export const FoodTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  grid-column: 2/4;
  grid-row: 1;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const FoodDescription = styled.span`
  font-size: 12px;
  line-height: 200%;
  color: ${colors.dark};
  grid-column: 2/3;
  grid-row: 1/3;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FoodPrice = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  grid-column: 3;
  grid-row: 3;
`;
