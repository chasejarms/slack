import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import GroupsReducer from'./groups_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  groups: GroupsReducer
});


export default RootReducer;
