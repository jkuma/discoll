import { FETCH_RELEASES } from '../actions'

export default function (state = [], action) {
  switch (action) {
    case FETCH_RELEASES:
      return [action.payload.data, ...state]
    default:
      return state
  }
}
