import { merge } from 'lodash';
import { RECEIVE_GROUPS } from '../actions/groups_actions';

const noGroups = {
  channels: [],
  directMessages: []
};

const GroupsReducer = (state = noGroups, action) => {
  switch (action.type) {
    case RECEIVE_GROUPS:
      return merge({}, state, action.groups);
    default:
      return state;
  }
};

export default GroupsReducer;
