import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false); // Track chatbot open/close state

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chatbot Toggle Button */}
      <button
        onClick={toggleChatbot}
        className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-secondary transition"
      >
        💬
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg p-4 w-64">
          <div className="flex justify-between items-center border-b pb-2 mb-2">
            <h4 className="text-lg font-bold text-gray-800">Chat with Us</h4>
            <button
              onClick={toggleChatbot}
              className="text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>
          </div>
          <p className="text-gray-600 mb-4">
            Hi there! How can we help you today?
          </p>
          <div className="space-y-2">
            <Link
              to="/contact"
              className="block bg-primary text-white text-center py-2 rounded hover:bg-secondary transition"
            >
              Go to Contact Page
            </Link>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-500 text-white text-center py-2 rounded hover:bg-green-600 transition"
            >
              Message on WhatsApp
            </a>
            <a
              href="mailto:info@youragency.com"
              className="block bg-gray-800 text-white text-center py-2 rounded hover:bg-gray-900 transition"
            >
              Send an Email
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
