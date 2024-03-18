import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/create">Créer un post</Link>
      </nav>
    </header>
  );
};

export default Header;
