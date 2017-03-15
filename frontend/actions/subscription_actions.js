import * as APIUtil from '../util/api_util';

export const RECEIVE_SUBSCRIBED_GROUPS = "RECEIVE_SUBSCRIBED_GROUPS";

export const receiveSubscribedGroups = subscribedGroups => ({
  type: RECEIVE_SUBSCRIBED_GROUPS,
  subscribedGroups
});

export const requestSubscribedGroups = () => dispatch => {
  APIUtil.requestSubscribedGroups()
  .then(subscribedGroups => dispatch(receiveSubscribedGroups(subscribedGroups)));
};
