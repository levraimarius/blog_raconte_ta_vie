import React, { useState } from "react";
import MessageList from "../components/MessageList/MessageList";

const HomePage = () => {
  const [messages] = useState([]);

  return (
    <div>
      <MessageList messages={messages} />
    </div>
  );
};

export default HomePage;
