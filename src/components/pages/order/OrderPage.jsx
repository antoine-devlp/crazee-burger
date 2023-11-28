import { styled } from "styled-components";
import { theme } from "../../../theme";
import { NavBar } from "./Navbar/NavBar";
import { Main } from "./Main/Main";
import { useState } from "react";
import AdminContext from "../../../Context/AdminContext.jsx";
import { FiChevronDown } from "react-icons/fi";

export const OrderPage = () => {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [activePannel, setActivePannel] = useState(true);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const adminContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    activePannel,
    setActivePannel,
    currentTabSelected,
    setCurrentTabSelected,
  };

  return (
    <OrderPageStyled>
      <div className="container">
        <AdminContext.Provider value={adminContextValue}>
          <NavBar />
          <Main />
        </AdminContext.Provider>
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
    /* overflow: hidden; */
  }
`;
