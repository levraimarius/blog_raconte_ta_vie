import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import MessageFormPage from "./pages/MessageFormPage";
import "./assets/styles/global.scss";

const App = () => {
  // État pour stocker la liste des messages
  const [messages, setMessages] = useState([]);

  return (
    <Router>
      <div>
        <Header />
        <div className="container">
          <h1>Raconte ta vie</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/create"
              element={<MessageFormPage addMessage={setMessages} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
