import React from "react";
import RegisterForm from "../components/RegisterForm/RegisterForm";

const RegisterFormPage = () => {
  const handleRegister = (formData) => {
    console.log("Submitted registration data:", formData);
  };

  return (
    <div>
      <h2>Register</h2>
      <RegisterForm handleRegister={handleRegister} />
    </div>
  );
};

export default RegisterFormPage;
