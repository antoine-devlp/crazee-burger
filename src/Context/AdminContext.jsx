import { createContext } from "react";

export default createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},
  activePannel: true,
  setActivePannel: () => {},
  currentTabSelected: "",
  setCurrentTabSelected: () => {},
});
