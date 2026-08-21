import React from 'react';
import '../styles/MessageList.css';

function MessageList({ messages, isLoading, messagesEndRef }) {
  return (
    <div className="message-list">
      {messages.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">🧠</div>
          <h2>Trip Brain</h2>
          <p>Your Ireland & Spain travel companion</p>
          <p className="subtext">Ask about accommodation, flights, activities, restaurants, or emergency contacts.</p>
        </div>
      )}

      {messages.map((message, index) => (
        <div key={index} className={`message message-${message.role}`}>
          <div className="message-avatar">
            {message.role === 'user' ? '👤' : '🧠'}
          </div>
          <div className="message-content">
            {message.content}
          </div>
        </div>
      ))}

      {isLoading && (
        <div className="message message-assistant">
          <div className="message-avatar">🧠</div>
          <div className="message-content loading">
            <span className="loading-dot"></span>
            <span className="loading-dot"></span>
            <span className="loading-dot"></span>
          </div>
        </div>
      )}

      <div ref={messagesEndRef} />
    </div>
  );
}

export default MessageList;
