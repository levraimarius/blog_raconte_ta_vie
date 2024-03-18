import React, { useState } from "react";
import MessageList from "../components/MessageList/MessageList";

const Home = () => {
  // État pour stocker la liste des messages
  const [messages, setMessages] = useState([]);

  // Fonction pour ajouter un nouveau message à la liste
  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div>
      <MessageList messages={messages} />
    </div>
  );
};

export default Home;
