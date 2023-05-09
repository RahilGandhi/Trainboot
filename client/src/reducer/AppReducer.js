import { TOGGLE_SIDEBAR } from "../actions";

export const AppReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      const sidebarValue = !state.sidebarOpen;
      return { ...state, sidebarOpen: sidebarValue };
    default:
      return { ...state };
  }
};
