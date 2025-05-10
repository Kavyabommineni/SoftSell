import React, { useState } from 'react';
import { FiMessageCircle } from 'react-icons/fi'; // Chat icon for open/close button
import { FiSend } from 'react-icons/fi'; // Send icon (enter symbol)

const ChatWidget = () => {
  const [messages, setMessages] = useState([
    { role: 'system', content: 'Ask me anything about selling your software license.' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to track if chat is open or closed

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { role: 'user', content: input };
    
    // Add user message to state first
    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages, userMessage];
      mockSendToAI(updatedMessages); // Call the mock function instead of the real AI API
      return updatedMessages;
    });

    setInput('');
    setLoading(true);
  };

  const mockSendToAI = (updatedMessages) => {
    // Here we mock the AI response based on the user input
    let aiReply = '';
    if (updatedMessages[updatedMessages.length - 1].content.includes('sell')) {
      aiReply = 'To sell your license, you will need to transfer the ownership to the buyer and provide them with all necessary files and documents.';
    } else if (updatedMessages[updatedMessages.length - 1].content.includes('legal')) {
      aiReply = 'It is generally legal to resell software unless the software license explicitly prohibits resale. Always check the terms and conditions of your license.';
    } else if (updatedMessages[updatedMessages.length - 1].content.includes('paid')) {
      aiReply = 'The time it takes to get paid depends on the payment method. It could take anywhere from a few days to several weeks.';
    } else {
      aiReply = 'Sorry, I don\'t have an answer for that. Please ask something else about selling your software license!';
    }

    setMessages((prevMessages) => {
      const aiMessage = { role: 'assistant', content: aiReply };
      return [...prevMessages, aiMessage];
    });
    setLoading(false);
  };

  const exampleQuestions = [
    'How do I sell my license?',
    'Is it legal to resell software?',
    'How long does it take to get paid?',
  ];

  return (
    <div>
      {/* Button to toggle chat window */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 p-3 bg-blue-600 text-white rounded-full shadow-lg z-50 flex items-center justify-center"
      >
        {isOpen ? (
          // Close symbol (X or any icon you'd like)
          <span className="text-xl">✖</span>
        ) : (
          // Open chat symbol (Chat bubble icon)
          <FiMessageCircle size={24} />
        )}
      </button>

      {/* Chat widget */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 w-80 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 shadow-lg rounded-lg overflow-hidden z-50 text-sm">
          <div className="bg-blue-600 text-white px-4 py-2 font-semibold">💬 AI Chat</div>
          <div className="p-3 h-64 overflow-y-auto space-y-2 text-gray-800 dark:text-gray-100">
            {messages.slice(1).map((msg, idx) => (
              <div key={idx} className={msg.role === 'user' ? 'text-right' : 'text-left'}>
                <div
                  className={`inline-block px-3 py-2 rounded-lg ${
                    msg.role === 'user' ? 'bg-blue-100 dark:bg-blue-700' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && <p className="text-gray-500 italic">Thinking...</p>}
          </div>
          <div className="border-t p-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="w-full p-2 border rounded text-sm dark:bg-gray-900 dark:text-white"
            />
            <div className="flex flex-wrap mt-2 gap-1">
              {exampleQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => setInput(q)}
                  className="text-blue-500 text-xs underline hover:text-blue-700"
                >
                  {q}
                </button>
              ))}
            </div>
            <button
              onClick={handleSend}
              className="mt-2 w-full py-2 bg-blue-600 text-white flex items-center justify-center rounded-lg"
            >
              <FiSend size={18} className="mr-2" />
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
