import { BsPersonCircle } from "react-icons/bs"
import { Link } from "react-router-dom"
import styled from "styled-components";
import { theme } from "../../../../theme";
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { useState } from "react";
import {FaUserSecret} from "react-icons/fa6"

export const NavbarRight = ({username}) => {
  const [isModeAdmin, setIsModeAdmin] = useState(false);

  const notification = () => { 
    setIsModeAdmin(!isModeAdmin);
    if (!isModeAdmin){
    toast.info("Mode admin activé", {
      icon: <FaUserSecret size={30} />,
      theme: "dark",
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }
   }
  return (
    <NavbarRightStyled className="InfosProfil">
        <ToggleButton labelIfChecked={"DÉSACTIVER LE MODE ADMIN"} labelIfUnchecked={"ACTIVER LE MODE ADMIN"} onToggle={notification}/>
        <ToastContainer className="toaster" bodyClassName="body-toast"/> {/* TODO: component particulier */}
        {/* TODO: component particulier */}
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

  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
  .profile {
    margin-left: 60px;
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