import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import MessageFormPage from "./pages/MessageFormPage";
import RegisterFormPage from "./pages/RegisterFormPage";
import LoginFormPage from "./pages/LoginFormPage";
import ForbiddenPage from "./pages/ForbiddenPage";
import "./assets/styles/global.scss";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div>
        <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <div className="container">
          <h1>Raconte ta vie</h1>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/create"
              element={<MessageFormPage addMessage={setMessages} />}
            />
            <Route path="/register" element={<RegisterFormPage />} />
            <Route
              path="/login"
              element={<LoginFormPage onLogin={handleLogin} />}
            />
            <Route path="/403" element={<ForbiddenPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
