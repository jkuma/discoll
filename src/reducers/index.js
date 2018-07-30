import UserReleasesReducer from './reducer_user_releases'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  userReleases: UserReleasesReducer
})

export default rootReducer