import React, { Component } from 'react';
import moment from 'moment';
import Config from './Config';

class SendMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      error: ''
    }
  }

  inputFormHandler = e => {
    this.setState({ text: e.target.value });
  };

  submitFormController = e => {
    e.preventDefault();
    if (this.state.text) {
      this.setState({ error: '' })
    } else {
      this.setState({ error: 'El texto no puede estar vacío' })
      return false;
    }

    const SERVER = Config.SERVER;
    fetch(`${SERVER}/messages`, {
      method: "post",
      headers: {
        "Content-Type": "application/json" // <--- don't forget this!
      },
      body: JSON.stringify({
        author: 456317,
        body: this.state.text,
        date: moment().format()
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log("Resp:", res)
        this.setState({
          text: '',
          error: ''
        })
      })
      .catch(e => console.error(e));
  };

  render() {
    return (
      <div className="chat__form-wrapper">
        {this.state.error ? <p className="chat__form-error">{this.state.error}</p> : ''}
        <form onSubmit={this.submitFormController} className="chat__form">
          <div className="chat__form-header">
            <div className="chat__form-header-avatar"><img src='avatars/456317.png' alt='Avatar' /></div>
            <div className="chat__form-header-name">Ze Pequenho</div>
          </div>
          <div className="chat__form-submit">
            <input type="text" value={this.state.text} onChange={e => this.inputFormHandler(e)} />
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SendMessage;
