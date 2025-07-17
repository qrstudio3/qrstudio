import React from 'react';

export function LogoUploader({ logo, onUpload }) {
  function handleChange(e) {
    const file = e.target.files[0];
    if (!file) return onUpload(null);
    const reader = new FileReader();
    reader.onload = () => onUpload(reader.result);
    reader.readAsDataURL(file);
  }

  return (
    <div className="my-4 text-center">
      <label className="block mb-1">Center Logo: </label>
      <input type="file" accept="image/*" onChange={handleChange} />
      {logo && (
        <div className="mt-2">
          
          <button
            onClick={() => onUpload(null)}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Remove Logo
          </button>
        </div>
      )}
    </div>
  );
}