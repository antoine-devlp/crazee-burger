import styled from "styled-components";
import { theme } from "../../../../theme";
import { useContext } from "react";
import AdminContext from "../../../../Context/AdminContext";
import AdminConcent from "./AdminConcent";
import AdminTabs from "./AdminTabs";
export default function AdminBar() {
  // state
  const { css } = useContext(AdminContext);
  // comportement

  // render
  return (
    <AdminBarStyled className={css}>
      <div className="wrapper">
        <AdminTabs />
        <AdminConcent />
      </div>
    </AdminBarStyled>
  );
}
const AdminBarStyled = styled.div`
  position: relative;
  transform: translateY(208px);
  &.activePanel {
    height: 200px;
    transform: translateY(0px);
  }
  .wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 100;
    width: 100vw;
    height: 250px;
  }
`;
