import { ERROR, RESET_ERROR } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case ERROR:
      return {
        message: action.message,
      };

    case RESET_ERROR:
      return {};

    default:
      return state;
  }
}
