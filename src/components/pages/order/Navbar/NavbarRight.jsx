import { BsPersonCircle } from "react-icons/bs"
import { Link } from "react-router-dom"
import styled from "styled-components";
import { theme } from "../../../../theme";

export const NavbarRight = ({username}) => {
  return (
    <NavbarRightStyled className="InfosProfil">
        {/* <div className="admin-button">Admin Button</div> */}
        <div className="profile">
          <p>
            Hey, <span className="orange">{username}</span>
          </p>
          <Link to="/" className="logout">
            Se déconnecter
          </Link>
        </div>
        <div className="icon">
          <BsPersonCircle className="icon" />
        </div>
      </NavbarRightStyled>
  )
}

const NavbarRightStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 0px;
  color: ${theme.colors.greyBlue};
  @media (min-width: 768px) {
    padding-right: 50px;
  }
  .admin-button{
    background: black;
    color: ${theme.colors.primary};
  }
  .profile {
    p,
    .logout {
      font-family: ${theme.family.Open};
      font-weight: ${theme.weights.regular};
    }
    p {
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
`;