import React, { useState } from "react";
import { format } from "date-fns";
import "./messageform.scss";

const MessageForm = ({ addMessage }) => {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim() || !author.trim()) {
      alert("Veuillez saisir un message et un auteur");
      return;
    }
    const newMessage = {
      text,
      author,
      date: format(new Date(), "dd/MM/yyyy HH:mm:ss"),
    };
    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMessage),
      });
      if (response.ok) {
        addMessage(newMessage);
        setText("");
        setAuthor("");
        alert("Message envoyé avec succès !");
      } else {
        console.error("Erreur lors de l'envoi du message");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du message:", error);
    }
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
