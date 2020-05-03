import { OPEN_ALERT, CLOSE_ALERT } from '../actions/alertActions';

const initializeState = {
  title: '',
  content: '',
  show: false,
  buttons: [],
  closeValue: '',
  value: '',
};

const alertReducer = (state = initializeState, action) => {
  switch (action.type) {
    case OPEN_ALERT:
      return {
        ...state,
        title: action.title,
        content: action.content,
        buttons: action.buttons,
        closeValue: action.closeValue || 'close',
        show: true,
      };

    case CLOSE_ALERT:
      return { ...initializeState, value: action.value };

    default:
      return { ...state };
  }
};

export default alertReducer;
