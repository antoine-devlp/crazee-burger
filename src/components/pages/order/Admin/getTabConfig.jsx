import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export const getTabConfig = () => [
  {
    index: "add",
    texte: "Ajouter un produit",
    icon: <AiOutlinePlus />,
  },
  {
    index: "edit",
    texte: "Modifier un produit",
    icon: <MdModeEditOutline />,
  },
];

export const getTabSelected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.index === currentTabSelected);
