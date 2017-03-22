import React from 'react';
import NewChannelModalContainer from '../../modals/new_channel_modal_container';

class MessageBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showChannelCreator: false,
      sliceEnd: 60
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.formatCurrentGroup = this.formatCurrentGroup.bind(this);
    this.updateSliceLength = this.updateSliceLength.bind(this);
  }

  updateSliceLength() {
    let windowWidth = $(window).width() - 400;

    this.setState({
      sliceEnd: Math.floor(windowWidth / 12)
    });
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateSliceLength);
    this.updateSliceLength();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateSliceLength);
  }

  toggleModal() {
    this.setState({
      showChannelCreator: !this.state.showChannelCreator
    });
  }

  formatCurrentGroup() {
    const { currentGroup } = this.props;
    const nameLength = (currentGroup || []).length;

    if (nameLength > 60) {
      return `${this.props.currentGroup.slice(0, this.state.sliceEnd)}...`;
    } else {
      return currentGroup;
    }
  }

  render() {
    return(
      <section className="message-banner">

        <div>
          { this.formatCurrentGroup() }
        </div>

        <button
          className="solid-button-style green-button"
          onClick={this.toggleModal}
          >
          Create Channel
        </button>

        <NewChannelModalContainer
          modalOpen={this.state.showChannelCreator}
          closeModal={this.toggleModal}
          />
      </section>
    );
  }
}

export default MessageBanner;
