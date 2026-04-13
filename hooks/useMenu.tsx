import { useContext } from "react";
import { MenuContext } from "@/context/MenuContext";

export function useMenu() {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useAppContext deve ser usado dentro de um AppProvider');
  }
  return context;
}