import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";

const LoginFormPage = ({ onLogin }) => {
  return (
    <div>
      <h2>Login</h2>
      <LoginForm handleLogin={onLogin} />
    </div>
  );
};

export default LoginFormPage;
