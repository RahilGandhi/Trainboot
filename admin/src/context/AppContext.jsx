import { createContext, useContext, useReducer } from "react";
import { AppReducer } from "../reducer/AppReducer";
import { TOGGLE_SIDEBAR } from "../actions";

const AppContext = createContext();

const initialState = {
  sidebarOpen: false,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  return (
    <AppContext.Provider value={{ toggleSidebar, state }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalAppContext = () => {
  return useContext(AppContext);
};
