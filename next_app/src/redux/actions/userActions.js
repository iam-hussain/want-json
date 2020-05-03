export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

// Action Creator
export const userLogin = ({ token, email, id }) => ({
  type: USER_LOGIN,
  token,
  email,
  id,
});

export const userLogout = () => ({
  type: USER_LOGOUT,
});
