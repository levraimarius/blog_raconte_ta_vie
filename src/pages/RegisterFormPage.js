import React from "react";
import RegisterForm from "../components/Login/Login";

const RegisterFormPage = () => {
  const handleRegister = (formData) => {
    console.log("Submitted registration data:", formData);
  };

  return (
    <div>
      <h3>Inscription</h3>
      <RegisterForm handleRegister={handleRegister} />
    </div>
  );
};

export default RegisterFormPage;
