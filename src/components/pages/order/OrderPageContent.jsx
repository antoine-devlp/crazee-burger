import { styled } from "styled-components";

export const OrderPageContent = () => {
  return <OrderPageContentStyled>Contenu</OrderPageContentStyled>;
};
const OrderPageContentStyled = styled.div`
  flex: 1;
  background: #f5f5f7;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
