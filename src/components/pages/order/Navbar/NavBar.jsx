import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../../../theme";
import { NavbarRight } from "./NavbarRight";
import { Logo } from "../../../reusable-ui/Logo";
import { refreshPage } from "../../../../utils/window";
export const NavBar = () => {
  const { username } = useParams();

  return (
    <NavBarStyled>
      <Logo className={"wrapperLogo"} onClick={refreshPage} />
      <NavbarRight username={username} />
    </NavBarStyled>
  );
};
const NavBarStyled = styled.nav`
  background-color: ${theme.colors.background_white};
  border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0px 0px;
  display: flex;
  justify-content: space-between;
  padding: 19px 20px;
  @media (min-width: 768px) {
    padding: 0px 20px;
  }
  a {
    text-decoration: none;
  }
  .wrapperLogo {
    width: fit-content;
    margin-bottom: 0px;
    cursor: pointer;
    h1 {
      display: none;
    }
    @media (min-width: 768px) {
      h1 {
        display: block;
      }
    }
  }
`;
