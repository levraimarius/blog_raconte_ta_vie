import React from "react";
import MessageForm from "../components/MessageForm/MessageForm";

const MessageFormPage = ({ addMessage }) => {
  return (
    <div>
      <MessageForm addMessage={addMessage} />
    </div>
  );
};

export default MessageFormPage;
