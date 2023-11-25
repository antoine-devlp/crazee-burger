import styled from "styled-components";
import { theme } from "../../../../theme";
import { useContext } from "react";
import AdminContext from "../../../../Context/AdminContext";
import { getTabConfig, getTabSelected } from "./getTabConfig";

export default function AdminContent() {
  const { currentTabSelected } = useContext(AdminContext);

  const tabs = getTabConfig();
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return (
    <AdminContentStyled>{tabSelected && tabSelected.texte}</AdminContentStyled>
  );
}

const AdminContentStyled = styled.div`
  min-height: 200px;
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.subtle};
  padding: 17px 21px;
`;
