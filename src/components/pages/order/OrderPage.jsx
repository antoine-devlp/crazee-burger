import { styled } from "styled-components";
import { theme } from "../../../theme";
// import { theme } from "../../../theme";
import { NavBar } from "./Navbar/NavBar";
import { Main } from "./Main/Main";

export const OrderPage = () => {
  return (
    <OrderPageStyled>
      <div className="container">
        <NavBar />
        <Main />
      </div>
    </OrderPageStyled>
  );
};
const OrderPageStyled = styled.div`
  padding: 24px 24px;
  height: 100vh;
  background: ${theme.colors.primary};
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    padding: 24px 56px;
  }
  .container {
    margin: auto;
    height: calc(100vh - (24px * 2));
    width: 100%;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    flex: 1;
    border-radius: ${theme.borderRadius.extraRound};
    overflow: hidden;
  }
`;
