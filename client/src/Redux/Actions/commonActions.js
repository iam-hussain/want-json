export const LOADER_START = 'LOADER_START';
export const LOADER_END = 'LOADER_END';
export const MENU_TOGGLE = 'MENU_TOGGLE';
export const OPEN_ALERT = 'OPEN_ALERT';
export const CLOSE_ALERT = 'CLOSE_ALERT';

// Action Creator
export const loaderEnd = () => ({
  type: LOADER_END,
});

export const loaderStart = () => ({
  type: LOADER_START,
});

export const menuToggle = () => ({
  type: MENU_TOGGLE,
});

export const openAlert = ({
  title, content, buttons, closeValue,
}) => ({
  type: OPEN_ALERT,
  title,
  content,
  buttons,
  closeValue,
});

export const closeAlert = (value) => ({
  type: CLOSE_ALERT,
  value,
});
