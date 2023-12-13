import { ActionType } from './action';

const initialState = {
  language: 'en',
};
// eslint-disable-next-line default-param-last
const translationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case ActionType.TOGGLE_LANGUAGE:
      return {
        ...state,
        language: state.language === 'en' ? 'id' : 'en',
      };
    default:
      return state;
  }
};

export default translationReducer;
