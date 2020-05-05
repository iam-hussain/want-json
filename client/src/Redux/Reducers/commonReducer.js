import {
  LOADER_START, LOADER_END, MENU_TOGGLE, OPEN_ALERT, CLOSE_ALERT,
} from '../Actions/commonActions';

const initializeState = {
  loading: true,
  menuToggle: false,
  alert: {
    title: '',
    content: '',
    show: false,
    buttons: [],
    closeValue: '',
    value: '',
  },
};

const commonReducer = (state = initializeState, action) => {
  switch (action.type) {
    case LOADER_START:
      return {
        ...state,
        loading: true,
      };

    case LOADER_END:
      return {
        ...state,
        loading: false,
      };

    case MENU_TOGGLE:
      return {
        ...state,
        menuToggle: !state.menuToggle,
      };

    case OPEN_ALERT:
      return {
        ...state,
        alert: {
          title: action.title,
          content: action.content,
          buttons: action.buttons,
          closeValue: action.closeValue || 'close',
          show: true,
        },
      };

    case CLOSE_ALERT:
      return { ...state, alert: { ...initializeState.alert, value: action.value } };

    default:
      return { ...state };
  }
};

export default commonReducer;
