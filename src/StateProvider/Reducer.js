export const initialState = {
  menu: null,
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "MENU_BAR":
      return {
        ...state,
        menu: action.menu,
      };
      break;
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
