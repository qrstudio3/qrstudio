import React from 'react';

export function FillTypeSelector({ fillType, onSelect }) {
  const options = [
    { value: 'solid', label: 'Solid Color' },
    { value: 'gradient', label: 'Gradient' },
    { value: 'image', label: 'Image Pattern' },
  ];

  return (
    <div className="my-2">
      {options.map(opt => (
        <label key={opt.value} className="mr-4">
          <input
            type="radio"
            value={opt.value}
            checked={fillType === opt.value}
            onChange={() => onSelect(opt.value)}
            className="mr-1"
          />
          {opt.label}
        </label>
      ))}
    </div>
  );
}
