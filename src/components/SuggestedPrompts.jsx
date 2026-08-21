import React from 'react';
import '../styles/SuggestedPrompts.css';

function SuggestedPrompts({ prompts, onPromptClick }) {
  return (
    <div className="suggested-prompts">
      <p className="prompts-label">Quick suggestions:</p>
      <div className="prompts-grid">
        {prompts.map((prompt, index) => (
          <button
            key={index}
            className="prompt-button"
            onClick={() => onPromptClick(prompt)}
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SuggestedPrompts;
