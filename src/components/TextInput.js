import React from 'react';

export function TextInput({ text, onChange }) {
  return (
    <div className="my-2">
      <input
        type="text"
        placeholder="Enter text to encode"
        value={text}
        onChange={e => onChange(e.target.value)}
        className="p-2 w-full border rounded"
      />
    </div>
  );
}