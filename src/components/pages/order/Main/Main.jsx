import { styled } from "styled-components";
import { theme } from "../../../../theme";

import Menu from "./Menu";
import AdminBar from "../Admin/AdminBar";
import { useContext } from "react";
import AdminContext from "../../../../Context/AdminContext";
export const Main = () => {
  const { isModeAdmin } = useContext(AdminContext);
  return (
    <MainStyled>
      <div className="bascket">test</div>
      <Menu />
      {isModeAdmin && <AdminBar />}
    </MainStyled>
  );
};
const MainStyled = styled.div`
  flex: 1;
  background-color: ${theme.colors.background_white};
  border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  display: grid;
  /* grid-template: 1fr; */
  overflow: hidden;
  grid-template: auto / 25% 1fr;
  .bascket {
    background: pink;
  }
`;
