import React from "react";
import "./messagelist.scss";

const MessageList = ({ messages }) => {
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
