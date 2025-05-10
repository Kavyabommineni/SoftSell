// MockedChatWidget.jsx
import React, { useState } from 'react';

const MockedChatWidget = () => {
  const [messages, setMessages] = useState([
    { text: 'Welcome! Ask me anything.', fromAI: true }
  ]);
  const [userInput, setUserInput] = useState('');

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    const userMessage = { text: userInput, fromAI: false };
    setMessages([...messages, userMessage]);

    // Mocked AI responses
    let aiResponse = '';
    if (userInput.toLowerCase().includes('sell license')) {
      aiResponse = 'You can sell your license by uploading it on our platform.';
    } else if (userInput.toLowerCase().includes('legal to resell')) {
      aiResponse = 'It depends on the license agreement with the software vendor.';
    } else if (userInput.toLowerCase().includes('get paid')) {
      aiResponse = 'Payments are processed within 3-5 business days.';
    } else {
      aiResponse = 'I didn\'t quite understand that. Can you rephrase?';
    }

    setMessages([...messages, userMessage, { text: aiResponse, fromAI: true }]);
    setUserInput('');
  };

  return (
    <div className="chat-widget">
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={message.fromAI ? 'ai-message' : 'user-message'}>
            {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={userInput}
        onChange={handleUserInput}
        placeholder="Ask a question..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default MockedChatWidget;
