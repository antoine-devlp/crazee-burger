import { styled } from "styled-components";
import { Logo } from "../../reusable-ui/Logo";
import { LoginForm } from "./LoginForm";
import Background from "/images/burger-background.jpg";
export const LoginPage = () => {
  return (
    <LoginPageStyled>
      <Logo className={"logo-login-page"}/>
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
  background: url(${Background}) rgba(0, 0, 0, 0.75);
  background-size: cover;
  background-position: center;
  background-blend-mode: darken;
  .logo-login-page{
    transform: scale(1.5);
    @media (min-width: 768px) {
      transform: scale(2.5);
    }
  }
`;
