import React from 'react';
import './LogoUploader.css';

export function LogoUploader({ logo, onUpload }) {
  function handleChange(e) {
    const file = e.target.files[0];
    if (!file) return onUpload(null);
    const reader = new FileReader();
    reader.onload = () => onUpload(reader.result);
    reader.readAsDataURL(file);
  }

  return (
    <div className="logo-uploader">
      {!logo ? (
        <label className="upload-area">
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="file-input"
          />
          <div className="upload-content">
            <svg className="upload-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 18a2 2 0 01-2-2V8a2 2 0 012-2h3l2-2h4l2 2h3a2 2 0 012 2v8a2 2 0 01-2 2H7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
            </svg>
            <div className="upload-text">
              <p className="upload-title">Upload Logo Image</p>
              <p className="upload-subtitle">Click or drag & drop</p>
            </div>
          </div>
        </label>
      ) : (
        <div className="logo-preview-container">
          <div className="logo-preview">
            <img src={logo} alt="Logo preview" className="logo-image" />
          </div>
          <button
            onClick={() => onUpload(null)}
            className="remove-button"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Remove Logo
          </button>
        </div>
      )}
    </div>
  );
}