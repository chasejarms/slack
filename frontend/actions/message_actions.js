import { requestMessages, requestMessageCreation } from '../util/api_util';

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

export const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
});

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const fetchMessages = groupName => dispatch => {
  requestMessages(groupName)
  .then(messages => dispatch(receiveMessages(messages)));
};

export const createMessage = messageInfo => dispatch => {
  return requestMessageCreation(messageInfo)
  .then(message => dispatch(receiveMessage(message)));
};
