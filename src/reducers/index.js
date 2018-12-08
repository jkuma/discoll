import UserReleasesReducer from './reducer_user_releases';
import CoverSizeReducer from './reducer_cover_size';
import ErrorReducer from './reducer_error';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  collection: UserReleasesReducer,
  coversize: CoverSizeReducer,
  errors: ErrorReducer,
});

export default rootReducer;
