import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";
import "./messageform.scss";

const MessageForm = ({ addMessage }) => {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim() || !author.trim()) {
      alert("Veuillez saisir un message et un auteur");
      return;
    }
    const newMessage = {
      id: uuidv4(),
      text,
      author,
      date: format(new Date(), "dd/MM/yyyy HH:mm:ss"),
    };
    addMessage(newMessage);
    setText("");
    setAuthor("");
  };

  return (
    <div className="post">
      <h3>Créer un post</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="author">Auteur</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="text">Message</label>
          <textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default MessageForm;
