import * as APIUtil from '../util/api_util';

export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';
export const RECEIVE_GROUP = 'RECEIVE_GROUP';

export const receiveGroups = groups => ({
  type: RECEIVE_GROUPS,
  groups
});

export const requestGroups = () => dispatch => {
  return APIUtil.requestGroups()
  .then(groups => dispatch(receiveGroups(groups)));
};

export const receiveGroup = group => ({
  type: RECEIVE_GROUP,
  group
});

export const requestGroupCreation = group => dispatch => (
  APIUtil.requestGroupCreation(group)
  .then(receivedGroup => dispatch(receiveGroup(receivedGroup)))
);
