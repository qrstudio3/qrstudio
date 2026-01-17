import React from 'react';
import './FillTypeSelector.css';

export function FillTypeSelector({ fillType, onSelect }) {
  const options = [
    { value: 'solid', label: 'Solid Color', icon: '●' },
    { value: 'gradient', label: 'Gradient', icon: '◐' },
    { value: 'image', label: 'Image Pattern', icon: '▦' },
  ];

  return (
    <div className="fill-type-selector">
      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => onSelect(opt.value)}
          className={`fill-option ${fillType === opt.value ? 'active' : ''}`}
        >
          <span className="option-icon">{opt.icon}</span>
          <span className="option-label">{opt.label}</span>
          {fillType === opt.value && (
            <div className="active-indicator" />
          )}
        </button>
      ))}
    </div>
  );
}
