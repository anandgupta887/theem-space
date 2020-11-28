export const initialState = {
  loggedInUser: [],
  isadmin: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "update admin user":
      return {
        ...state,
        loggedInUser: action.item,
        isadmin: action.isadmin,
      };
    case "update user":
      return {
        ...state,
        loggedInUser: action.item,
      };
    case "logout":
      return {
        loggedInUser: [],
        isadmin: false,
      };
    default:
      return state;
  }
};

export default reducer;
