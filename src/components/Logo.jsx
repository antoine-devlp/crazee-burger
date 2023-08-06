import { styled } from "styled-components";

import { theme } from "../theme";

import logo from "/src/assets/logo-orange.png";

export const Logo = () => {
  return (
    <LogoStyled>
      CRAZEE <img src={logo} alt="" /> BURGER
    </LogoStyled>
  );
};

const LogoStyled = styled.div`
  color: ${theme.colors.primary};
  font-family: ${theme.family.Amatic};
  font-size: ${theme.fonts.P6};
  font-weight: ${theme.weights.bold};
  display: flex;
  align-items: center;
  img {
    width: 150px;
  }
  margin-bottom: 40px;
  @media (min-width: 768px) {
    font-size: 110px;
    img {
      width: 200px;
    }
  }
`;
