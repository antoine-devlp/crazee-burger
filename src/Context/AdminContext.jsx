import { createContext } from "react";
import { FiChevronDown } from "react-icons/fi";

export default createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},
  activePannel: true,
  setActivePannel: () => {},
  isAddTab: "",
  setIsAddTab: () => {},
  isEditTab: "",
  setIsEditTab: () => {},
});
