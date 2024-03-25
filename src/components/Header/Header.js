import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = ({ isAuthenticated, isAdmin }) => {
  return (
    <header>
      <nav>
        <Link to="/">Accueil</Link>
        {isAdmin && <Link to="/create">Créer un post</Link>}
        {!isAuthenticated && <Link to="/login">Connexion</Link>}
        {!isAuthenticated && <Link to="/register">Inscription</Link>}
      </nav>
    </header>
  );
};

export default Header;
