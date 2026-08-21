import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';
import SuggestedPrompts from './SuggestedPrompts';
import MessageInput from './MessageInput';
import '../styles/ChatInterface.css';

function ChatInterface({
  messages,
  isLoading,
  onSendMessage,
  showSuggestions,
  suggestedPrompts,
  onSuggestedPrompt,
  onToggleSuggestions,
  messagesEndRef
}) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSendMessage(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <div className="chat-interface">
      <MessageList
        messages={messages}
        isLoading={isLoading}
        messagesEndRef={messagesEndRef}
      />

      <div className="chat-input-section">
        {showSuggestions && messages.length === 0 && suggestedPrompts.length > 0 && (
          <SuggestedPrompts
            prompts={suggestedPrompts}
            onPromptClick={onSuggestedPrompt}
          />
        )}

        {messages.length > 0 && !showSuggestions && (
          <button
            className="show-suggestions-btn"
            onClick={onToggleSuggestions}
          >
            💡 Suggestions
          </button>
        )}

        {messages.length > 0 && showSuggestions && (
          <div className="suggestions-toggle">
            <SuggestedPrompts
              prompts={suggestedPrompts}
              onPromptClick={onSuggestedPrompt}
            />
            <button
              className="hide-suggestions-btn"
              onClick={onToggleSuggestions}
            >
              Hide suggestions
            </button>
          </div>
        )}

        <MessageInput
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onSubmit={handleSubmit}
          disabled={isLoading}
        />
      </div>
    </div>
  );
}

export default ChatInterface;
