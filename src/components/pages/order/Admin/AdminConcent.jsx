import styled from "styled-components";
import { theme } from "../../../../theme";

export default function AdminConcent() {
  return <AdminContentStyled>Ajouter un produit</AdminContentStyled>;
}

const AdminContentStyled = styled.div`
  height: 100%;
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.subtle};
  padding: 17px 21px;
`;
