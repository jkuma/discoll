import {
  FETCH_COLLECTION_NEXT_PAGE,
  FETCH_USER_COLLECTION,
  RESET_USER_COLLECTION,
} from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case RESET_USER_COLLECTION:
      return {};

    case FETCH_USER_COLLECTION:
      return action.payload.data;

    case FETCH_COLLECTION_NEXT_PAGE:
      if (
          state.hasOwnProperty('pagination')
          && action.payload.data.pagination.page > state.pagination.page
      ) {
        action.payload.data.releases =
            state.releases.concat(action.payload.data.releases);
      }

      return action.payload.data;

    default:
      return state;
  }
}
