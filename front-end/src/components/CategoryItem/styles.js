import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const CategoryItemContainer = styled.div`
  max-width: 90px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

export const CategoryImage = styled.img`
  height: 90px;
  width: 90px;
  border-radius: 50%;
  border: 0.5px solid ${colors.dark};
`;

export const CategoryName = styled.span`
  font-weight: 400;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
`;