import React, { useState } from "react";
import axios from "axios";

const MessageListItem = ({ message, onUpdate, onDelete, isAdmin }) => {
  const [editingMessage, setEditingMessage] = useState(null);
  const [editedText, setEditedText] = useState(message.text);

  const handleEdit = () => {
    setEditingMessage(message._id);
  };

  const handleSaveEdit = async () => {
    try {
      await axios.put(`/api/messages/${message._id}`, {
        text: editedText,
      });
      onUpdate(message._id, editedText);
      setEditingMessage(null);
    } catch (error) {
      console.error("Erreur lors de la modification du message:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditingMessage(null);
    setEditedText(message.text);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/messages/${message._id}`);
      onDelete(message._id);
    } catch (error) {
      console.error("Erreur lors de la suppression du message:", error);
    }
  };

  return (
    <li key={message._id}>
      {editingMessage === message._id ? (
        <div>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleSaveEdit}>Enregistrer</button>
          <button onClick={handleCancelEdit}>Annuler</button>
        </div>
      ) : (
        <div className="message">{message.text}</div>
      )}
      <div className="message-footer">
        <div>
          {isAdmin && (
            <>
              <button onClick={handleEdit}>Modifier</button>
              <button onClick={handleDelete}>Supprimer</button>
            </>
          )}
        </div>
        <span className="author">
          {message.author} | {message.date}
        </span>
      </div>
    </li>
  );
};

export default MessageListItem;
