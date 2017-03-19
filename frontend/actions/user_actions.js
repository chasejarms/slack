import { getUsers } from '../util/api_util';
export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const requestUsers = () => dispatch => (
  getUsers()
  .then(users => dispatch(receiveUsers(users)))
);
