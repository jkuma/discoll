import UserReleasesReducer from './reducer_user_releases';
import CoverSizeReducer from './reducer_cover_size';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  collection: UserReleasesReducer,
  coversize: CoverSizeReducer,
});

export default rootReducer;
