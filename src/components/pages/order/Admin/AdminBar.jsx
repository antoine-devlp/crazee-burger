import styled from "styled-components";
import { theme } from "../../../../theme";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { useState } from "react";
export default function AdminBar() {
  // state
  const [activePannel, setActivePannel] = useState(false);
  const [css, setCss] = useState("");
  const [activeIcon, setActiveIcon] = useState(<FiChevronUp />);
  const [activeOnglet, setActiveOnglet] = useState("ajout");

  // comportement
  const handleReduct = () => {
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
    event.preventDefault();
    let element = event.target;
    let key = element.getAttribute("b-key");
    var active = document.querySelector("[b-key=" + activeOnglet + "]");

    active.classList.remove("active");
    element.classList.add("active");
    setActiveOnglet(key);
  };
  // render
  return (
    <AdminBarStyled className={css}>
      <div className="wrapper">
        <div className="onglet-wrapper">
          <div className="onglet" onClick={() => handleReduct()}>
            {activeIcon}
          </div>
          <div className="onglet active" b-key={"ajout"} onClick={handleClick}>
            <AiOutlinePlus className="noclick" />
            <div className="texte noclick">Ajouter un produit</div>
          </div>
          <div className="onglet" b-key={"modif"} onClick={handleClick}>
            <MdModeEditOutline className="noclick" />
            <div className="texte noclick">Modifier un produit</div>
          </div>
        </div>
        <div className="content">Ajouter un produit</div>
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
    width: 100%;
    height: 250px;
    .onglet-wrapper {
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
    }
    .content {
      height: 100%;
      background: ${theme.colors.background_white};
      box-shadow: 0px -6px 8px -2px #0000001a;
      padding: 17px 21px;
    }
  }
`;
