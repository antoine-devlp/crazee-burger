import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export const getTabConfig = (currentTabSelected) => [
  // {
  //   index: "togglePannel",
  //   texte: "",
  //   icon: activePannel ? <FiChevronDown /> : <FiChevronUp />,
  //   onClick: () => setActivePannel(!activePannel),
  //   className: !activePannel ? "active" : "",
  // },
  {
    index: "add",
    texte: "Ajouter un produit",
    icon: <AiOutlinePlus />,
    className: currentTabSelected === "add" ? "active" : "",
  },
  {
    index: "edit",
    texte: "Modifier un produit",
    icon: <MdModeEditOutline />,
    className: currentTabSelected === "edit" ? "active" : "",
  },
];
