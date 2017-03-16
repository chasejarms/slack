import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from '../actions/message_actions';
import union from 'lodash/union';

const MessagesReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = union([], state);
  switch(action.type) {
    case RECEIVE_MESSAGES:
      return action.messages;
    case RECEIVE_MESSAGE:
      newState.push(action.message);
      return newState;
    default:
      return state;
  }
};

export default MessagesReducer;
