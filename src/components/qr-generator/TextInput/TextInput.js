import React from 'react';
import './TextInput.css';

export function TextInput({ text, onChange }) {
  return (
    <div className="text-input-container">
      <label className="input-label">
        <svg className="input-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span>Text to Encode</span>
      </label>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Enter your text or URL..."
          value={text}
          onChange={e => onChange(e.target.value)}
          className="text-input"
        />
        <div className="input-char-count">
          {text.length} characters
        </div>
      </div>
    </div>
  );
}