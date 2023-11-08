import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../../theme";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { useState } from "react";
import { FaUserSecret } from "react-icons/fa6";
import Profile from "./Profile";

export const NavbarRight = ({ username }) => {
  const [isModeAdmin, setIsModeAdmin] = useState(false);

  const notification = () => {
    setIsModeAdmin(!isModeAdmin);
    if (!isModeAdmin) {
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
      });
    }
  };
  return (
    <NavbarRightStyled className="InfosProfil">
      <ToggleButton
        labelIfChecked={"DÉSACTIVER LE MODE ADMIN"}
        labelIfUnchecked={"ACTIVER LE MODE ADMIN"}
        onToggle={notification}
      />
      <ToastContainer className="toaster" bodyClassName="body-toast" />
      <Profile username={username} />
    </NavbarRightStyled>
  );
};

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
`;
