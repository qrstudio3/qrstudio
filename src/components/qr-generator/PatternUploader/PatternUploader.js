import React from 'react';
import './PatternUploader.css';

export function PatternUploader({ onUpload }) {
  function handleChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => onUpload(reader.result);
    reader.readAsDataURL(file);
  }

  return (
    <div className="pattern-uploader">
      <label className="pattern-upload-area">
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="file-input"
        />
        <div className="pattern-upload-content">
          <svg className="pattern-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
            <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
            <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
            <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
          </svg>
          <p className="pattern-text">Upload Pattern Image</p>
        </div>
      </label>
    </div>
  );
}