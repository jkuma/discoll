import { FETCH_USER_RELEASES, FETCH_NEXT_RELEASES } from '../actions/index'

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_USER_RELEASES:
      return action.payload.data

    case FETCH_NEXT_RELEASES:
      if (state.hasOwnProperty('pagination') && action.payload.data.pagination.page > state.pagination.page) {
        action.payload.data.releases = state.releases.concat(action.payload.data.releases)
      }

      return action.payload.data

    default:
      return state
  }
}
