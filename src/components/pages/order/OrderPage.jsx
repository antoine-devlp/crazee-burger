import { styled } from "styled-components";
import { theme } from "../../../theme";
// import { theme } from "../../../theme";
import { NavBar } from "../../reusable-ui/NavBar";
import { OrderPageContent } from "./OrderPageContent";

export const OrderPage = () => {
  return (
    <OrderPageStyled>
      <NavBar />
      <OrderPageContent />
    </OrderPageStyled>
  );
};
const OrderPageStyled = styled.div`
  padding: 24px 24px;
  min-height: calc(100vh - 48px);
  display: flex;
  flex-direction: column;
  background: ${theme.colors.primary};
  @media (min-width: 768px) {
    padding: 24px 56px;
  }
`;
