import ReleasesReducer from './reducer_releases'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({Releases: ReleasesReducer})

export default rootReducer