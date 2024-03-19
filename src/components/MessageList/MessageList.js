import React, { useState, useEffect } from "react";
import "./messagelist.scss";

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("/api/messages");
        if (response.ok) {
          const data = await response.json();
          setMessages(data);
        } else {
          console.error("Erreur lors de la récupération des messages");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des messages:", error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="message-list">
      <h3>Liste des Messages</h3>
      {messages.length === 0 ? (
        <p>Aucun message à afficher pour le moment.</p>
      ) : (
        <ul>
          {messages.map((message) => (
            <li key={message.id}>
              <div className="message">{message.text}</div>
              <div className="message-footer">
                <span className="author">
                  {message.author} | {message.date}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MessageList;
