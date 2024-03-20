import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MessageForm from "../components/MessageForm/MessageForm";

const MessageFormPage = ({ addMessage }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const sessionId = document.cookie
          .split("; ")
          .find((row) => row.startsWith("sessionId="));

        if (!sessionId) {
          navigate("/login");
          return;
        }

        const response = await fetch("/api/users/check-session", {
          headers: {
            Cookie: sessionId,
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setIsAdmin(userData.role === "admin");
        } else {
          navigate("/403");
        }
      } catch (error) {
        console.error(
          "Erreur lors de la vérification des autorisations :",
          error
        );
        navigate("/403");
      }
    };

    checkAdminStatus();
  }, [navigate]);

  if (!isAdmin) {
    return (
      <div>
        <h1>Erreur 403 : Accès refusé</h1>
        <p>
          Vous n'avez pas les autorisations nécessaires pour accéder à cette
          page.
        </p>
      </div>
    );
  }

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
