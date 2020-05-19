export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGGED = 'USER_LOGGED';

// Action Creator

export const loggedUpdate = (logged) => ({
  type: USER_LOGGED,
  logged,
});


export const userLogin = ({ token, email, id }) => ({
  type: USER_LOGIN,
  token,
  email,
  id,
});

export const userLogout = () => ({
  type: USER_LOGOUT,
});
