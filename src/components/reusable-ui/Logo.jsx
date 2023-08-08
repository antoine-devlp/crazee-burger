import { styled } from "styled-components";

import { theme } from "../../theme";

import logo from "/images/logo-orange.png";

export const Logo = () => {
  return (
    <LogoStyled className="wrapperLogo">
      <h1>CRAZEE</h1>
      <img src={logo} alt="" />
      <h1>BURGER</h1>
    </LogoStyled>
  );
};

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  transform: scale(1.5);
  h1 {
    display: inline;
    text-align: center;
    color: ${theme.colors.primary};
    font-family: ${theme.family.Amatic};
    font-size: ${theme.fonts.P4};
    line-height: 1em;
    font-weight: ${theme.weights.bold};
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px;
    margin: 0 5px;
  }
  @media (min-width: 768px) {
    transform: scale(2.5);
  }
`;
