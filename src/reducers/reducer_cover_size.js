import { UPDATE_COVER_SIZE } from '../actions'

export default function (state = 'large', action) {
  switch (action.type) {
    case UPDATE_COVER_SIZE:
      return action.size

    default:
      return state
  }
}
