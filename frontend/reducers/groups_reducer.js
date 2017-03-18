import { merge } from 'lodash';
import { RECEIVE_GROUPS, RECEIVE_GROUP } from '../actions/groups_actions';

const noGroups = {
  channels: [],
  directMessages: []
};

const GroupsReducer = (state = noGroups, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_GROUPS:
      return merge({}, state, action.groups);
    case RECEIVE_GROUP:
      newState = merge({}, state);
      let formattedGroup = {
        id: action.group.id,
        name: action.group.name
      };
      if (action.group.channel) {
        newState.channels.push(formattedGroup);
      } else {
        newState.directMessages.push(formattedGroup);
      }
      return newState;
    default:
      return state;
  }
};

export default GroupsReducer;
