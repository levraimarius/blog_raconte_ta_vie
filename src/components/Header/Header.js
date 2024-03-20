import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = ({ isAuthenticated, isAdmin, onLogout }) => {
  const handleLogout = () => {
    document.cookie =
      "sessionId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    onLogout();
  };

  return (
    <header>
      <nav>
        <Link to="/">Accueil</Link>
        {isAdmin && <Link to="/create">Créer un post</Link>}
        {isAuthenticated ? (
          <button onClick={handleLogout}>Déconnexion</button>
        ) : (
          <>
            <Link to="/login">Connexion</Link>
            <Link to="/register">Inscription</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
