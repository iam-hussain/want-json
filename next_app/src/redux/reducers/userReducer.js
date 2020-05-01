import { USER_LOGIN, USER_LOGOUT } from "../actions/userActions";

const initializeState = {
  id: "",
  token: "",
  email: "",
  logged: false,
};

const counterReducer = (state = initializeState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        id: action.id,
        token: action.token,
        email: action.email,
        logged: true,
      };

    case USER_LOGOUT:
      return { ...state, id: "", token: "", email: "", logged: false };

    default:
      return { ...state };
  }
};

export default counterReducer;
