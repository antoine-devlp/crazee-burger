import styled from "styled-components";
import { theme } from "../../../../theme";

export default function AdminConcent() {
  return <AdminContentStyled>Ajouter un produit</AdminContentStyled>;
}

const AdminContentStyled = styled.div`
  height: 100%;
  background: ${theme.colors.background_white};
  box-shadow: 0px -6px 8px -2px #0000001a;
  padding: 17px 21px;
`;
