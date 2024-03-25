import React from "react";
import LoginForm from "../components/Login/Login";

const LoginFormPage = ({ onLogin }) => {
  return (
    <div>
      <h3>Connexion</h3>
      <LoginForm handleLogin={onLogin} />
    </div>
  );
};

export default LoginFormPage;
