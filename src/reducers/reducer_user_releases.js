import { FETCH_USER_RELEASES } from '../actions/index'

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_USER_RELEASES:
      return action.payload.data

    default:
      return state
  }
}
