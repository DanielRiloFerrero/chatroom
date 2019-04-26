import React, { Component } from 'react';
import moment from 'moment';

class MessageBody extends Component {
  render() {
    return (
      <div className="chat__message-body">
        <div className="chat__message-header">enviado a las {formatDate(this.props.msg.date)}</div>
        <p>{this.props.msg.body}</p>
      </div>
    );
  }
}

const formatDate = date => moment(date).format('h:mm:ss, Do MMMM YYYY');
export default MessageBody;
