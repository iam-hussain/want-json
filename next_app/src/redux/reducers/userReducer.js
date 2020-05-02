import { USER_LOGIN, USER_LOGOUT } from "../actions/userActions";

const initializeState = {
  token: "",
  logged: false,
  userData : {},
};

const counterReducer = (state = initializeState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        token: action.token,
        logged: true,
      };

    case USER_LOGOUT:
      return { ...initializeState };

    default:
      return { ...state };
  }
};

export default counterReducer;
