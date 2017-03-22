import React from 'react';
import { connect } from 'react-redux';
import MessageBanner from './message_banner';

const formatCurrentGroup = currentMessages => {
  let groupName = (currentMessages[0] || {}).groupName;
  if (groupName) {
    return groupName.split(",").join(", ");
  }
  return groupName;
};

const mapStateToProps = ({ currentMessages }) => ({
  currentGroup: formatCurrentGroup(currentMessages)
});

export default connect(mapStateToProps, undefined)(MessageBanner);
