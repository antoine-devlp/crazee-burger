import styled from "styled-components";
import { theme } from "../../../../theme";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { useContext } from "react";
import { FaUserSecret } from "react-icons/fa6";
import Profile from "./Profile";
import ToastAdmin from "./ToastAdmin";
import AdminContext from "../../../../Context/AdminContext";

export const NavbarRight = ({ username }) => {
  const { isModeAdmin, setIsModeAdmin } = useContext(AdminContext);

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
      <ToggleButton labelIfChecked={"DÉSACTIVER LE MODE ADMIN"} labelIfUnchecked={"ACTIVER LE MODE ADMIN"} onToggle={notification} />
      <ToastAdmin />
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
`;
