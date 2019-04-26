import React, { Component } from 'react';
import moment from 'moment';
import Message from './Message';
import Config from './Config'

class ChatRoomHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: newDate(),
      dateInterval: null
    }
  }

  componentDidMount() {
    const interval = setInterval(() => this.setState({ hour: newDate() }), Config.TIMER);
    this.setState({ dateInterval: interval });
  }

  componentWillUnmount() {
    clearInterval(this.state.dateInterval);
  }

  render() {
    return (
      <div className="chat__room-header">
        <div className="chat__room-hour">
          {this.state.hour}
        </div>
        {this.props.body.body.messages.map(el => this.props.body.body.people.map(el2 => (el2.id === el.author) ? <Message key={el.id} body={el} msg={el2} /> : ''))}
      </div>
    );
  }
}

const newDate = () => moment().format('h:mm:ss, Do MMMM YYYY');

export default ChatRoomHeader;