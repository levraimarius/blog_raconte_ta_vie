import React, { useState, useEffect } from "react";
import "./messagelist.scss";

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [editingMessageId, setEditingMessageId] = useState(null);
  const [editedText, setEditedText] = useState("");

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

  const handleEdit = (messageId, initialText) => {
    setEditingMessageId(messageId);
    setEditedText(initialText);
  };

  const handleCancelEdit = () => {
    setEditingMessageId(null);
    setEditedText("");
  };

  const handleSaveEdit = async (messageId) => {
    try {
      const response = await fetch(`/api/messages/${messageId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: editedText }),
      });
      if (response.ok) {
        const updatedMessages = messages.map((message) =>
          message._id === messageId ? { ...message, text: editedText } : message
        );
        setMessages(updatedMessages);
        setEditingMessageId(null);
        setEditedText("");
      } else {
        console.error("Erreur lors de la modification du message");
      }
    } catch (error) {
      console.error("Erreur lors de la modification du message:", error);
    }
  };

  const handleDelete = async (messageId) => {
    try {
      const response = await fetch(`/api/messages/${messageId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setMessages(messages.filter((message) => message._id !== messageId));
      } else {
        console.error("Erreur lors de la suppression du message");
      }
    } catch (error) {
      console.error("Erreur lors de la suppression du message:", error);
    }
  };

  return (
    <div className="message-list">
      <h3>Liste des Messages</h3>
      {messages.length === 0 ? (
        <p>Aucun message à afficher pour le moment.</p>
      ) : (
        <ul>
          {messages.map((message) => (
            <li key={message._id}>
              {editingMessageId === message._id ? (
                <div>
                  <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                  />
                  <button onClick={() => handleSaveEdit(message._id)}>
                    Enregistrer
                  </button>
                  <button onClick={handleCancelEdit}>Annuler</button>
                </div>
              ) : (
                <div className="message">{message.text}</div>
              )}
              <div className="message-footer">
                <div>
                  <button onClick={() => handleEdit(message._id, message.text)}>
                    Modifier
                  </button>
                  <button onClick={() => handleDelete(message._id)}>
                    Supprimer
                  </button>
                </div>
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
