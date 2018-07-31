import UserReleasesReducer from './reducer_user_releases'
import CoverSizeReducer from './reducer_cover_size'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  userReleases: UserReleasesReducer,
  coverSize: CoverSizeReducer
})

export default rootReducer