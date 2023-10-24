import { styled } from "styled-components";
import { theme } from "../../../../theme";

import Menu from "./Menu";
export const Main = () => {
  return (
  <MainStyled className="test">
    {/* <div className="bascket">test</div> */}
    <Menu/>
  </MainStyled>
  );
};
const MainStyled = styled.div`
  flex: 1;
  background-color: ${theme.colors.background_white};
  border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  display: grid;
  grid-template: 1fr;
  overflow-y: scroll;
  /* width */
  &::-webkit-scrollbar {
    width: 10px;
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: ${theme.borderRadius.round};
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  /* grid-template: auto/ 25% auto; */
  /* .bascket{
    background: pink;
  } */
`;