import React, { useState, useEffect } from 'react';
import './App.css';
import ChatRoom from './ChatRoom';
import AvatarHeader from './AvatarHeader';
import Config from './Config';

const useCallPeople = SERVER => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch(`${SERVER}/people`)
      .then(res => res.json())
      .then(res => setPeople(res))
      .catch(err => {
        console.error('Error with people: ', err)
        setPeople([])
      });
  }, []);

  return people;
}

const useCallMessages = SERVER => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    let messagesTimer = setInterval(() => {
      fetch(`${SERVER}/messages`)
        .then(res => res.json())
        .then(res => setMessages(res))
        .catch(err => {
          console.error('Error with messages: ', err)
          setMessages([]);
        });
    }, Config.TIMER);
    return () => clearInterval(messagesTimer);
  }, []);

  return messages;
}

const App = props => {
  const SERVER = Config.SERVER;

  return (
    <div>
      <AvatarHeader peoples={useCallPeople(SERVER)} />
      <ChatRoom body={{ people: useCallPeople(SERVER), messages: useCallMessages(SERVER) }} />
    </div>
  );
}

export default App;
