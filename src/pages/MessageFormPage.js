import React from "react";
import MessageForm from "../components/MessageForm/MessageForm";

const MessageFormPage = ({ addMessage }) => {
  // Fonction pour ajouter un nouveau message
  const handleAddMessage = (newMessage) => {
    addMessage(newMessage);
  };

  return (
    <div>
      <MessageForm addMessage={handleAddMessage} />
    </div>
  );
};

export default MessageFormPage;
