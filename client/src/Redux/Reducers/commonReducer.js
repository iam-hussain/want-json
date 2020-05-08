import {
  LOADER_START, LOADER_END, OPEN_ALERT, CLOSE_ALERT,
} from '../Actions/commonActions';

const initializeState = {
  loading: true,
  alert: {
    title: '',
    content: '',
    show: false,
    buttons: [],
    defaultClose: {
      value: 'close',
      action: false,
      data: {},
    },
    result: '',
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

    case OPEN_ALERT:
      return {
        ...state,
        alert: {
          title: action.title,
          content: action.content,
          buttons: action.buttons,
          defaultClose: action.defaultClose || initializeState.alert.defaultClose,
          show: true,
        },
      };

    case CLOSE_ALERT:
      return { ...state, alert: { ...state.alert, show: false, result: action.value } };

    default:
      return { ...state };
  }
};

export default commonReducer;
