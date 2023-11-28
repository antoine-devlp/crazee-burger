import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddProduct from "./AddProduct";
import ModifyProduct from "./ModifyProduct";

export const getTabConfig = () => [
  {
    index: "add",
    texte: "Ajouter un produit",
    icon: <AiOutlinePlus />,
    components: <AddProduct />,
  },
  {
    index: "edit",
    texte: "Modifier un produit",
    icon: <MdModeEditOutline />,
    components: <ModifyProduct />,
  },
];

export const getTabSelected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.index === currentTabSelected);
