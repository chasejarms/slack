import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import GroupsReducer from'./groups_reducer';
import SubscriptionsReducer from './subscriptions_reducer';
import MessagesReducer from './messages_reducer';
import UsersReducer from './users_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  groups: GroupsReducer,
  subscribedGroups: SubscriptionsReducer,
  currentMessages: MessagesReducer,
  users: UsersReducer
});


export default RootReducer;
