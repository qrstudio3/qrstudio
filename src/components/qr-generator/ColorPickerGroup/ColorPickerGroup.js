import React from 'react';
import './ColorPickerGroup.css';

export function ColorPickerGroup({ fillType, solidColor, gradientStart, gradientEnd, onSolid, onStart, onEnd }) {
  return (
    <div className="color-picker-group">
      {fillType === 'solid' && (
        <div className="color-picker-item">
          <label className="color-label">
            <span>QR Code Color</span>
            <div className="color-preview" style={{ background: solidColor }} />
          </label>
          <input
            type="color"
            value={solidColor}
            onChange={e => onSolid(e.target.value)}
            className="color-input"
          />
        </div>
      )}
      {fillType === 'gradient' && (
        <div className="gradient-pickers">
          <div className="color-picker-item">
            <label className="color-label">
              <span>Start Color</span>
              <div className="color-preview" style={{ background: gradientStart }} />
            </label>
            <input
              type="color"
              value={gradientStart}
              onChange={e => onStart(e.target.value)}
              className="color-input"
            />
          </div>
          <div className="color-picker-item">
            <label className="color-label">
              <span>End Color</span>
              <div className="color-preview" style={{ background: gradientEnd }} />
            </label>
            <input
              type="color"
              value={gradientEnd}
              onChange={e => onEnd(e.target.value)}
              className="color-input"
            />
          </div>
        </div>
      )}
    </div>
  );
}