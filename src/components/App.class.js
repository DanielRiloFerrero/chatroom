import React, { Component } from 'react';
// import logo from '../logo.svg';
import './App.css';
import ChatRoom from './ChatRoom';
import AvatarHeader from './AvatarHeader';
// import '../main.scss';
import Config from './Config';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     "people": [
  //       {
  //         "id": 456317,
  //         "name": "Mr. Bean"
  //       },
  //       {
  //         "id": 456318,
  //         "name": "Diego Playa"
  //       },
  //       {
  //         "id": 456319,
  //         "name": "Guille Puertas"
  //       },
  //       {
  //         "id": 456320,
  //         "name": "M. Rajoy"
  //       },
  //       {
  //         "id": 456321,
  //         "name": "María López"
  //       },
  //       {
  //         "id": 456322,
  //         "name": "Pedro Carreras"
  //       },
  //       {
  //         "id": 456323,
  //         "name": "Mike Rivers"
  //       },
  //       {
  //         "id": 456324,
  //         "name": "Juan Nadie"
  //       },
  //       {
  //         "id": 456325,
  //         "name": "Julia Soto"
  //       },
  //       {
  //         "id": 456326,
  //         "name": "Darth Maul"
  //       },
  //       {
  //         "id": 456327,
  //         "name": "Obi Juan"
  //       },
  //       {
  //         "id": 456328,
  //         "name": "Oldie Lennon"
  //       },
  //       {
  //         "id": 456329,
  //         "name": "Mss. Rottenmeier"
  //       },
  //       {
  //         "id": 456330,
  //         "name": "Anita Kiro"
  //       },
  //       {
  //         "id": 456331,
  //         "name": "Bea Fangirl"
  //       },
  //       {
  //         "id": 456332,
  //         "name": "Pijus Magnificus"
  //       }
  //     ],
  //     "messages": [
  //       {
  //         "id": 1,
  //         "author": 456317,
  //         "body": "mensaje 0 con un texto algo largo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //         "date": "2019-03-26T18:33:00"
  //       },
  //       {
  //         "id": 2,
  //         "author": 456317,
  //         "body": "mensaje 1 de texto suficientemente largo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //         "date": "2019-03-26T18:33:02"
  //       },
  //       {
  //         "author": 456326,
  //         "body": "Yo... no soy tu padre",
  //         "date": "2019-03-27T09:33:41.579Z",
  //         "id": 3
  //       }
  //     ]
  //   }
  // };

  constructor(props) {
    super(props);
    this.state = {
      people: [],
      messages: [],
      interval: 0
    }
  }

  componentDidMount() {
    const SERVER = Config.SERVER;

    const interval = setInterval(() => {
      this.callMessages(SERVER);
    }, 1000);
    this.setState({ dateInterval: interval });

    this.callMessages(SERVER);

    fetch(`${SERVER}/people`)
      .then(res => res.json())
      .then(res => this.setState({ people: res }))
      .catch(err => console.err('Error with people: ', err));
  }

  componentWillUnmount() {
    clearInterval(this.state.dateInterval);
  }

  callMessages = (SERVER) => fetch(`${SERVER}/messages`).then(res => res.json()).then(res => this.setState({ messages: res })).catch(err => console.err('Error with messages: ', err));

  render() {
    return (
      <div>
        <AvatarHeader peoples={this.state.people} />
        <ChatRoom body={this.state} />
      </div>
    );
  }
}

export default App;
