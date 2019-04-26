import React, { Component } from 'react';
import Avatar from './Avatar';
import MessageBody from './MessageBody';

class Message extends Component {
  render() {
    return (
      <div className="chat__message">
        <Avatar people={this.props.msg} />
        <MessageBody msg={this.props.body} />
      </div>
    );
  }
}

export default Message;
