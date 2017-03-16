import React from 'react';

class NewMessageForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      new_message: ""
    };
  }

  handleNewMessageInput(e) {
    e.preventDefault();
    this.setState({
      new_message: e.target.value
    });
  }

  render() {
    return(
      <form>
        <input
          type="text"
          value={this.state.new_message}
          onChange={this.handleNewMessageInput}
          />
      </form>
    );
  }

}

export default NewMessageForm;
