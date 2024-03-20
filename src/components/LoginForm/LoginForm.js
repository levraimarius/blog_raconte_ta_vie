import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/login", {
        username,
        password,
      });

      handleLogin(username);
      setIsAuthenticated(true);
      document.cookie = `sessionId=${response.data.sessionId}; path=/`;
      // navigate("/");
    } catch (error) {
      console.error("Erreur de connexion :", error);
    }
  };

  const handleLogout = async () => {
    try {
      document.cookie =
        "sessionId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      setIsAuthenticated(false);
      console.log("User logged out");
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Vous êtes connecté.</p>
          <button onClick={handleLogout}>Se déconnecter</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Se connecter</button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
