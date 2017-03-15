import { RECEIVE_SUBSCRIBED_GROUPS } from '../actions/subscription_actions';

const _noSubscriptions = [];

const SubscriptionsReducer = (state = _noSubscriptions, action) => {
  switch(action.type) {
    case RECEIVE_SUBSCRIBED_GROUPS:
      let describedGroups = action.subscribedGroups.map(group => group.group_id);
      return describedGroups;
    default:
      return state;
  }
};

export default SubscriptionsReducer;
