import { USER_LOGIN, USER_LOGOUT, USER_LOGGED } from '../Actions/userActions';

const initializeState = {
  logged: false,
  userData: {},
};

const counterReducer = (state = initializeState, action) => {
  switch (action.type) {
    case USER_LOGGED:
      return {
        ...state,
        logged: action.logged,
      };

    case USER_LOGIN:
      return {
        ...state,
        logged: true,
        userData: {
          email: action.email,
          id: action.id,
        },
      };

    case USER_LOGOUT:
      return { ...initializeState };

    default:
      return { ...state };
  }
};

export default counterReducer;
