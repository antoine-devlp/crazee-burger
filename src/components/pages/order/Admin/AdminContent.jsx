import styled from "styled-components";
import { theme } from "../../../../theme";
import { useContext } from "react";
import AdminContext from "../../../../Context/AdminContext";

export default function AdminContent() {
  const { currentTabSelected } = useContext(AdminContext);
  return (
    <AdminContentStyled>
      {currentTabSelected === "add" && "ajouter un produit"}
      {currentTabSelected == "edit" && "modifier un produit"}
    </AdminContentStyled>
  );
}

const AdminContentStyled = styled.div`
  min-height: 200px;
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.subtle};
  padding: 17px 21px;
`;
