import React from 'react';
import '../styles/MessageInput.css';

function MessageInput({ value, onChange, onSubmit, disabled }) {
  return (
    <form className="message-input-form" onSubmit={onSubmit}>
      <input
        type="text"
        className="message-input"
        placeholder="Ask about your trip..."
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      <button
        type="submit"
        className="message-submit-btn"
        disabled={disabled || !value.trim()}
      >
        Send
      </button>
    </form>
  );
}

export default MessageInput;
