import { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AdminContext from "../../../../Context/AdminContext";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styled from "styled-components";
import Tab from "../../../reusable-ui/Tab";
import { theme } from "../../../../theme";

export default function AdminTabs() {
  const { activePannel, setActivePannel, isAddTab, setIsAddTab, isEditTab, setIsEditTab } = useContext(AdminContext);

  const selectTab = (tabSelected) => {
    setActivePannel(true);

    if (tabSelected === "add") {
      setIsAddTab(true);
      setIsEditTab(false);
    }
    if (tabSelected === "edit") {
      setIsEditTab(true);
      setIsAddTab(false);
    }
  };

  return (
    <AdminTabsStyled>
      <Tab className={!activePannel ? "active" : ""} onClick={() => setActivePannel(!activePannel)} icon={activePannel ? <FiChevronDown /> : <FiChevronUp />} />
      <Tab className={isAddTab ? "active" : ""} onClick={() => selectTab("add")} texte="Ajouter un produit" icon={<AiOutlinePlus />} />
      <Tab className={isEditTab ? "active" : ""} onClick={() => selectTab("edit")} texte="Modifier un produit" icon={<MdModeEditOutline />} />
    </AdminTabsStyled>
  );
}
const AdminTabsStyled = styled.div`
  padding: 0px 71px;
  display: flex;
  align-items: center;
  .active {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.background_white};
    &:hover {
      .texte {
        border-bottom: 2px solid ${theme.colors.background_white};
      }
    }
  }
`;
