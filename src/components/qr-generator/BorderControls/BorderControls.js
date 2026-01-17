import React from 'react';
import './BorderControls.css';

export function BorderControls({ borderWidth, onWidthChange, borderColor, onColorChange, borderRadius, onRadiusChange }) {
  return (
    <div className="border-controls">
      <h3 className="controls-title">Logo Border Settings</h3>

      <div className="control-group">
        <label className="control-label">
          <span>Border Width</span>
          <span className="control-value">{borderWidth}px</span>
        </label>
        <input
          type="range"
          min="0"
          max="10"
          value={borderWidth}
          onChange={e => onWidthChange(Number(e.target.value))}
          className="range-slider"
        />
      </div>

      <div className="control-group">
        <label className="control-label">
          <span>Border Radius</span>
          <span className="control-value">{borderRadius}px</span>
        </label>
        <input
          type="range"
          min="0"
          max="50"
          value={borderRadius}
          onChange={e => onRadiusChange(Number(e.target.value))}
          className="range-slider"
        />
      </div>

      <div className="control-group">
        <label className="control-label">
          <span>Border Color</span>
          <div className="color-preview-small" style={{ background: borderColor }} />
        </label>
        <input
          type="color"
          value={borderColor}
          onChange={e => onColorChange(e.target.value)}
          className="color-input-border"
        />
      </div>
    </div>
  );
}