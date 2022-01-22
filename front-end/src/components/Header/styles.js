import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #fafafa;
  width: 100%;
  height: 6rem;
  max-height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 9rem;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.div`
  background-color: #FF3C3C;
  width: 65px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fafafa;
  font-weight: 500;
`;

export const NameRestaurant = styled.span`
  font-weight: 400;
  font-size: 2.2rem;
  letter-spacing: 0.1rem;
`;