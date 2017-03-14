import * as APIUtil from '../util/api_util';

export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';

export const receiveGroups = groups => ({
  type: RECEIVE_GROUPS,
  groups
});

export const requestGroups = () => dispatch => (
  APIUtil.requestGroups()
  .then(groups => dispatch(receiveGroups(groups)))
);
