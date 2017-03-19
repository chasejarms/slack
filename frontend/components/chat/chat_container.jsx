import { connect } from 'react-redux';
import Chat from './chat';
import { requestGroups } from '../../actions/groups_actions';
import { requestSubscribedGroups } from '../../actions/subscription_actions';
import { fetchMessages } from '../../actions/message_actions';
import { requestUsers } from '../../actions/user_actions';

const mapStateToProps = ({groups: { channels }}) => ({
  channels
});

const mapDispatchToProps = dispatch => ({
  requestGroups: () => dispatch(requestGroups()),
  requestSubscribedGroups: () => dispatch(requestSubscribedGroups()),
  requestMessages: groupName => dispatch(fetchMessages(groupName)),
  requestUsers: () => dispatch(requestUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
