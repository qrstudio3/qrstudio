import React from 'react';

export function BorderControls({ borderWidth, onWidthChange, borderColor, onColorChange, borderRadius, onRadiusChange }) {
  return (
    <div className="my-4 text-left">
      <div className="mb-2">
        <label className="block">Border Width: {borderWidth}px</label>
        <input
          type="range"
          min="0"
          max="20"
          value={borderWidth}
          onChange={e => onWidthChange(parseInt(e.target.value, 10))}
          className="w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block">Border Color:</label>
        <input
          type="color"
          value={borderColor}
          onChange={e => onColorChange(e.target.value)}
        />
      </div>
      <div>
        <label className="block">Corner Roundness: {borderRadius}px</label>
        <input
          type="range"
          min="0"
          max="50"
          value={borderRadius}
          onChange={e => onRadiusChange(parseInt(e.target.value, 10))}
          className="w-full"
        />
      </div>
    </div>
  );
}