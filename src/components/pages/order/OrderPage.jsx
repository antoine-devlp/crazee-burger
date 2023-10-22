import { styled } from "styled-components";
import { theme } from "../../../theme";
// import { theme } from "../../../theme";
import { NavBar } from "./NavBar";
import { OrderPageContent } from "./OrderPageContent";

export const OrderPage = () => {
  return (
    <OrderPageStyled>
      <div className="container">
        <NavBar />
        <OrderPageContent />
      </div>
    </OrderPageStyled>
  );
};
const OrderPageStyled = styled.div`
  padding: 24px 24px;
  min-height: 100vh;
  background: ${theme.colors.primary};
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    padding: 24px 56px;
  }
  .container {
    margin: auto;
    width: 100%;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;
