import './App.css';
import React from 'react';
import { useChat } from './useChat';
import { db } from './firebase';

function App() {
const [message, setMessage] = React.useState("");
const {loading, messages, error} = useChat();

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection('messages').add({
      idUser: "1",
      timestamp: Date.now(),
      message
    })
  }
  return (
    <div className="App">
     <div classname="App-header">
     <p>escribe tu mensaje</p>
    <form>
      <input value={message} onChange={(e) => setMessage(e.target.value)}></input>
      <button type="submit" onClick={sendMessage}>enviar mensaje</button>
    </form>
    <ul>
      {messages.map(m => <li key={m.id}>{m.message}</li>)}
    </ul>
     </div>
    </div>
  );
}

export default App;
