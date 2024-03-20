import React, { useState, useEffect } from "react";
import axios from "axios";
import MessageListItem from "../MessageListItem/MessageListItem";
import "./messagelist.scss";

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("/api/messages");
        setMessages(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des messages:", error);
      }
    };

    fetchMessages();

    const checkAdminStatus = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const response = await axios.get("/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setIsAdmin(response.data.role === "admin");
      } catch (error) {
        console.error("Erreur lors de la vérification du statut admin:", error);
      }
    };

    checkAdminStatus();
  }, []);

  const handleUpdate = (messageId, newText) => {
    const updatedMessages = messages.map((message) =>
      message._id === messageId ? { ...message, text: newText } : message
    );
    setMessages(updatedMessages);
  };

  const handleDelete = (messageId) => {
    const updatedMessages = messages.filter(
      (message) => message._id !== messageId
    );
    setMessages(updatedMessages);
  };

  return (
    <div className="message-list">
      <h3>Liste des Messages</h3>
      {messages.length === 0 ? (
        <p>Aucun message à afficher pour le moment.</p>
      ) : (
        <ul>
          {messages.map((message) => (
            <MessageListItem
              key={message._id}
              message={message}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
              isAdmin={isAdmin}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default MessageList;
