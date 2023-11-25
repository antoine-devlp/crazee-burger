import styled from "styled-components";
import { theme } from "../../../../theme";
import { useContext } from "react";
import AdminContext from "../../../../Context/AdminContext";

export default function AdminContent() {
  const { isAddTab, isEditTab } = useContext(AdminContext);
  return (
    <AdminContentStyled>
      {isAddTab && "ajouter un produit"}
      {isEditTab && "modifier un produit"}
    </AdminContentStyled>
  );
}

const AdminContentStyled = styled.div`
  min-height: 200px;
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.subtle};
  padding: 17px 21px;
`;
