import React from 'react';
import Modal from 'react-modal';
import ChannelBrowseList from './channel_browse_list';

class ChannelModal extends React.Component {
  constructor(props) {
    super(props);
    this.inlineStyling = this.inlineStyling.bind(this);
  }

  inlineStyling() {

    // we use inline styling here to overcome the inline styling this component
    // gives us by default

    return {
      overlay : {
        position        : 'fixed',
        top             : 0,
        left            : 0,
        right           : 0,
        bottom          : 0,
        backgroundColor : 'rgba(255, 255, 255, 1)',
        zIndex          : 10
      },
      content : {
        position        : 'fixed',
        width           : "100%",
        height          : "100%",
        top             : '0',
        left            : '0',
        right           : '0',
        zIndex          : 11
      }
    };
  }

  render() {
    const { modalOpen, closeModal, channels } = this.props;
    return(
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        contentLabel=""
        style={this.inlineStyling()}>

      <i className="fa fa-times-circle" onClick={closeModal}></i>
      <section className="channel-modal-container">
        <h1>Browse all channels</h1>
        <ChannelBrowseList
          channels={channels}
          closeModal={closeModal}
          />
      </section>

      </Modal>
    );
  }
}

export default ChannelModal;
