import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import GroupsReducer from'./groups_reducer';
import SubscriptionsReducer from './subscriptions_reducer';
import MessagesReducer from './messages_reducer';
import UsersReducer from './users_reducer';
import { CLEAR_STATE } from '../actions/session_actions';


const AppReducer = combineReducers({
  session: SessionReducer,
  groups: GroupsReducer,
  subscribedGroups: SubscriptionsReducer,
  currentMessages: MessagesReducer,
  users: UsersReducer
});

const RootReducer = (state, action) => {
  if (action.type === CLEAR_STATE) {
    state = undefined;
  }

  return AppReducer(state, action);
};


export default RootReducer;
