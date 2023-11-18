import { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AdminContext from "../../../../Context/AdminContext";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function AdminTabs() {
  const { activePannel, setActivePannel, setCss, activeIcon, setActiveIcon, activeOnglet, setActiveOnglet } = useContext(AdminContext);

  const handleReduct = (event) => {
    event.preventDefault;
    let checkActive = event.target;
    checkActive.classList.toggle("active");
    if (activePannel) {
      setCss("");
      setActiveIcon(<FiChevronUp />);
    } else {
      setCss("activePanel");
      setActiveIcon(<FiChevronDown />);
    }
    setActivePannel(!activePannel);
  };
  const handleClick = (event) => {
    if (!activePannel) {
      setActivePannel(!activePannel);
      setCss("activePanel");
      setActiveIcon(<FiChevronDown />);
    }
    event.preventDefault();
    let element = event.target;
    let key = element.getAttribute("b-key");
    var active = document.querySelector("[b-key=" + activeOnglet + "]");

    active.classList.toggle("active");
    element.classList.toggle("active");
    setActiveOnglet(key);
  };

  return (
    <AdminTabsStyled>
      <div className={!activePannel ? "onglet active" : "onglet"} onClick={(event) => handleReduct(event)}>
        {activeIcon}
      </div>

      <div className={activeOnglet == "ajout" ? "onglet active" : "onglet"} b-key={"ajout"} onClick={handleClick}>
        <AiOutlinePlus className="noclick" />

        <div className="texte noclick">Ajouter un produit</div>
      </div>

      <div className={activeOnglet == "modif" ? "onglet active" : "onglet"} b-key={"modif"} onClick={handleClick}>
        <MdModeEditOutline className="noclick" />

        <div className="texte noclick">Modifier un produit</div>
      </div>
    </AdminTabsStyled>
  );
}
const AdminTabsStyled = styled.div`
  padding: 0px 71px;
  display: flex;
  align-items: center;
  .onglet {
    padding: 10px 22px;
    background: ${theme.colors.background_white};
    box-shadow: 0px -6px 8px -2px #0000001a;
    border-radius: 5px 5px 0px 0px;
    margin: 0px 1px;
    display: flex;
    align-items: center;
    height: 43px;
    color: ${theme.colors.greySemiDark};
    .texte {
      margin: 3px 0px 3px 13px;
    }
    & > * {
      pointer-events: none;
    }
    &.active {
      background: ${theme.colors.background_dark};
      color: ${theme.colors.background_white};
      &:hover {
        .texte {
          border-bottom: 2px solid ${theme.colors.background_white};
        }
      }
    }
    &:hover {
      cursor: pointer;
      .texte {
        border-bottom: 2px solid ${theme.colors.greySemiDark};
      }
    }
  }
`;
