import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import GroupsReducer from'./groups_reducer';
import SubscriptionsReducer from './subscriptions_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  groups: GroupsReducer,
  subscribedGroups: SubscriptionsReducer
});


export default RootReducer;
