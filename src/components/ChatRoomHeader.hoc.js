import React, { Component } from 'react';
import moment from 'moment';
import Message from './Message';
import withInterval from './hoc/withInterval';
import Config from './Config';

class ChatRoomHeader extends Component {
  render() {
    return (
      <div className="chat__room-header">
        <div className="chat__room-hour">
          {this.props.data}
        </div>
        {this.props.body.body.messages.map(el => this.props.body.body.people.map(el2 => (el2.id === el.author) ? <Message key={el.id} body={el} msg={el2} /> : ''))}
      </div>
    );
  }
}

const newDate = () => moment().format('h:mm:ss, Do MMMM YYYY');

export default withInterval(newDate, Config.TIMER)(ChatRoomHeader);