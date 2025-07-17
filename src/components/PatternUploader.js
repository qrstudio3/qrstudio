import React from 'react';

export function PatternUploader({ onUpload }) {
  function handleChange(e) {
    const file = e.target.files[0];
    if (!file) return onUpload(null);
    const reader = new FileReader();
    reader.onload = () => onUpload(reader.result);
    reader.readAsDataURL(file);
  }

  return (
    <div className="my-2">
      <input type="file" accept="image/*" onChange={handleChange} />
    </div>
  );
}