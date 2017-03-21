import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from '../actions/message_actions';
import union from 'lodash/union';

const MessagesReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = union([], state);
  switch(action.type) {
    case RECEIVE_MESSAGES:
      return action.messages;
    case RECEIVE_MESSAGE:
      // this conditional ensures that the message isn't added
      // twice when someone creates a message because there
      // are two render methods in our controller

      let lastMessageId = state[state.length - 1].id;
      if (lastMessageId !== action.message.id) {
        newState.push(action.message);
      }
      return newState;
    default:
      return state;
  }
};

export default MessagesReducer;
