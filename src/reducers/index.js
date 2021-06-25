import { combineReducers } from 'redux';
import UserReducer from './UserReducer'
import SystemReducer from './SystemReducer';
import LanguageReducer from './LanguageReducer';

const rootReducer = combineReducers({
  system: SystemReducer,
  user: UserReducer,
  language: LanguageReducer
})

export default rootReducer;