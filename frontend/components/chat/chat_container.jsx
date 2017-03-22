import { connect } from 'react-redux';
import Chat from './chat';
import { requestGroups, receiveGroup } from '../../actions/groups_actions';
import { requestSubscribedGroups, receiveNewSubscription } from '../../actions/subscription_actions';
import { fetchMessages } from '../../actions/message_actions';
import { requestUsers } from '../../actions/user_actions';

const findLastId = (subscribedGroups) => {
  let lastIndex = subscribedGroups.length - 1;
  return subscribedGroups[lastIndex];
};

const mapStateToProps = ({groups: { channels }, session: { currentUser }, subscribedGroups}) => ({
  channels,
  currentUser,
  lastSubscriptionId: findLastId(subscribedGroups)
});

const mapDispatchToProps = dispatch => ({
  requestGroups: () => dispatch(requestGroups()),
  requestSubscribedGroups: () => dispatch(requestSubscribedGroups()),
  requestMessages: groupName => dispatch(fetchMessages(groupName)),
  requestUsers: () => dispatch(requestUsers()),
  receiveNewSubscription: groupId => dispatch(receiveNewSubscription(groupId)),
  receiveGroup: group => dispatch(receiveGroup(group))
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
