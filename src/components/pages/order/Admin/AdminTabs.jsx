import { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AdminContext from "../../../../Context/AdminContext";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styled from "styled-components";
import Tab from "../../../reusable-ui/Tab";
import { theme } from "../../../../theme";
import { getTabConfig } from "./getTabConfig";

export default function AdminTabs() {
  const {
    activePannel,
    setActivePannel,
    currentTabSelected,
    setCurrentTabSelected,
  } = useContext(AdminContext);

  const selectTab = (tabSelected) => {
    setActivePannel(true);
    setCurrentTabSelected(tabSelected);
  };

  const tabs = getTabConfig();

  return (
    <AdminTabsStyled>
      <Tab
        texte=""
        icon={activePannel ? <FiChevronDown /> : <FiChevronUp />}
        onClick={() => setActivePannel(!activePannel)}
        className={!activePannel ? "active" : ""}
      />
      {tabs.map((tab) => (
        <Tab
          texte={tab.texte}
          icon={tab.icon}
          onClick={() => selectTab(tab.index)}
          className={currentTabSelected === tab.index ? "active" : ""}
          key={tab.index}
        />
      ))}
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
