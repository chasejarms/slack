import React from 'react';
import GroupItem from './group_item';
import ChannelModal from '../../modals/channel_modal';

class ChannelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.toggleChannelModal = this.toggleChannelModal.bind(this);
  }

  toggleChannelModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    const { channels, subscribedGroups } = this.props;
    let channelCount = 0;
    channels.forEach(channel => channelCount ++);
    let formattedChannels = channels.filter(channel => {
      return subscribedGroups.includes(channel.id);
    }).map(channel => <GroupItem
      groupInfo={ channel }
      key={ channel.id }
      name={ channel.name.length > 10 ? `${channel.name.slice(0,10)}...` : channel.name }
      />);


    return (
      <section>
        <a onClick={this.toggleChannelModal} className="channel-header">
          <h5>CHANNELS ({channelCount})</h5>
        </a>
        <ChannelModal
          modalOpen={this.state.showModal}
          closeModal={this.toggleChannelModal}
          channels={channels}
          />
        <ul>
          { formattedChannels }
        </ul>
      </section>
    );

  }
}

export default ChannelList;
