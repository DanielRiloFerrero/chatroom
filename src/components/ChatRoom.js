import React, { Component } from 'react';
// import ChatRoomHeader from './ChatRoomHeader';
import ChatRoomHeader from './ChatRoomHeader.hoc';
import SendMessage from './SendMessage';

class ChatRoom extends Component {
  render() {
    return (
      <div className="chat">
        <SendMessage />
        <ChatRoomHeader body={this.props} />
      </div>
    );
  }
}

export default ChatRoom;
