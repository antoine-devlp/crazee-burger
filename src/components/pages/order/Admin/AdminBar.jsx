import styled from "styled-components";
import { useContext } from "react";
import AdminContext from "../../../../Context/AdminContext";
import AdminContent from "./AdminContent";
import AdminTabs from "./AdminTabs";
export default function AdminBar() {
  // state
  const { activePannel } = useContext(AdminContext);
  // comportement
  // render
  return (
    <AdminBarStyled>
      <AdminTabs />
      {activePannel && <AdminContent />}
    </AdminBarStyled>
  );
}
const AdminBarStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
