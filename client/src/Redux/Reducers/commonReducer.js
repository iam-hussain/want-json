import { LOADER_START, LOADER_END, MENU_TOGGLE } from '../actions/commonActions';

const initializeState = {
  loading: true,
  menuToggle: false,
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

    default:
      return { ...state };
  }
};

export default commonReducer;
