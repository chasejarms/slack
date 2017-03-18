import React from 'react';
import { connect } from 'react-redux';
import ChannelBrowseItem from './channel_browse_item';

const mapStateToProps = ({ subscribedGroups }, { channelInfo, closeModal }) => ({
  subscribedGroups,
  channelInfo,
  closeModal
});

export default connect(mapStateToProps, undefined)(ChannelBrowseItem);
