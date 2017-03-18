import { RECEIVE_SUBSCRIBED_GROUPS, RECEIVE_SUBSCRIPTION } from '../actions/subscription_actions';
import union from 'lodash/union';

const _noSubscriptions = [];

const SubscriptionsReducer = (state = _noSubscriptions, action) => {
  let newState = union([], state);
  switch(action.type) {
    case RECEIVE_SUBSCRIBED_GROUPS:
      let describedGroups = action.subscribedGroups.map(group => group.group_id);
      return describedGroups;
    case RECEIVE_SUBSCRIPTION:
      newState.push(action.id);
      return newState;
    default:
      return state;
  }
};

export default SubscriptionsReducer;
