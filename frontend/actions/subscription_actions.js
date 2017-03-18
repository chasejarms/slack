import * as APIUtil from '../util/api_util';

export const RECEIVE_SUBSCRIBED_GROUPS = "RECEIVE_SUBSCRIBED_GROUPS";
export const RECEIVE_SUBSCRIPTION = "RECEIVE_SUBSCRIPTION";

export const receiveSubscribedGroups = subscribedGroups => ({
  type: RECEIVE_SUBSCRIBED_GROUPS,
  subscribedGroups
});

export const receiveSubscription = id => ({
  type: RECEIVE_SUBSCRIPTION,
  id
});

export const requestSubscribedGroups = () => dispatch => {
  return APIUtil.requestSubscribedGroups()
  .then(subscribedGroups => dispatch(receiveSubscribedGroups(subscribedGroups)));
};
