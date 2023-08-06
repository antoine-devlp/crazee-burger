import { styled } from "styled-components";
import { Logo } from "../../reusable-ui/Logo";
import { LoginForm } from "./LoginForm";
import Background from "/images/burger-background.jpg";
export const LoginPage = () => {
  return (
    <LoginPageStyled>
      <Logo />
      <LoginForm />
    </LoginPageStyled>
  );
};

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: url(${Background}) rgba(0, 0, 0, 0.75);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: darken;
    z-index: -1;
  }
`;
