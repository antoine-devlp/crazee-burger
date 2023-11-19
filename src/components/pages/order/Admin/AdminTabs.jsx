import { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AdminContext from "../../../../Context/AdminContext";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styled from "styled-components";
import Tab from "../../../reusable-ui/Tab";

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
      <Tab conditionClass={!activePannel ? "onglet active" : "onglet"} onClick={(event) => handleReduct(event)} icon={activeIcon} />
      <Tab keyElement={"ajout"} conditionClass={activeOnglet == "ajout" ? "onglet active" : "onglet"} onClick={handleClick} texte="Ajouter un produit" icon={<AiOutlinePlus />} />
      <Tab keyElement={"modif"} conditionClass={activeOnglet == "modif" ? "onglet active" : "onglet"} onClick={handleClick} texte="Modifier un produit" icon={<MdModeEditOutline />} />
    </AdminTabsStyled>
  );
}
const AdminTabsStyled = styled.div`
  padding: 0px 71px;
  display: flex;
  align-items: center;
`;
