import { requestMessages } from '../util/api_util';

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";

export const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
});

export const fetchMessages = groupName => dispatch => {
  requestMessages(groupName)
  .then(messages => dispatch(receiveMessages(messages)));
};
