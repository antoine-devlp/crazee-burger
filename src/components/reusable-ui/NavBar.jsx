import { BsPersonCircle } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../theme";
import { Logo } from "./Logo";
export const NavBar = () => {
  const { username } = useParams();
  return (
    <NavBarStyled>
      <a href="./">
        <Logo />
      </a>
      <div className="InfosProfil">
        <div className="Infos">
          <h1>
            Hey, <span className="orange">{username}</span>
          </h1>
          <Link to="/" className="logout">
            Se déconnecter
          </Link>
        </div>
        <div className="icon">
          <BsPersonCircle className="icon" />
        </div>
      </div>
    </NavBarStyled>
  );
};
const NavBarStyled = styled.nav`
  background-color: ${theme.colors.background_white};
  border-radius: 15px 15px 0px 0px;
  display: flex;
  justify-content: space-between;
  padding: 19px 20px;
  @media (min-width: 768px) {
    padding: 0px 20px;
  }
  .wrapperLogo {
    width: fit-content;
    margin-bottom: 0px;
    transform: scale(1);
    h1 {
      display: none;
    }
    @media (min-width: 768px) {
      h1 {
        display: block;
      }
    }
  }
  .InfosProfil {
    display: flex;
    align-items: center;
    padding-right: 0px;
    color: ${theme.colors.greyBlue};
    @media (min-width: 768px) {
      padding-right: 50px;
    }
    .Infos {
      h1,
      .logout {
        font-family: ${theme.family.Open};
        font-weight: ${theme.weights.regular};
      }
      h1 {
        font-size: 16px;
        margin: 0px;
      }
      .orange {
        color: ${theme.colors.primary};
      }
      .logout {
        color: ${theme.colors.greyBlue};
        font-size: 10px;
        text-decoration: none;
        margin-top: 4px;
        &:hover {
          text-decoration: underline;
          text-underline-offset: 3px;
        }
      }
    }
    .icon {
      font-size: 36px;
      margin-left: 10px;
    }
  }
`;
