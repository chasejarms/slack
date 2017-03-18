import { RECEIVE_SUBSCRIBED_GROUPS, RECEIVE_SUBSCRIPTION, RECEIVE_NEW_SUBSCRIPTION } from '../actions/subscription_actions';
import union from 'lodash/union';

const _noSubscriptions = [];

const SubscriptionsReducer = (state = _noSubscriptions, action) => {
  let newState = union([], state);
  switch(action.type) {
    case RECEIVE_SUBSCRIBED_GROUPS:
      let describedGroups = action.subscribedGroups.map(group => group.group_id);
      return describedGroups;
    case RECEIVE_SUBSCRIPTION:
      // this is used for when a user creates a new channel
      newState.push(action.id);
      return newState;
    case RECEIVE_NEW_SUBSCRIPTION:
      // this is used when a user subscribes to a channel
      newState.push(action.groupId);
      return newState;
    default:
      return state;
  }
};

export default SubscriptionsReducer;
