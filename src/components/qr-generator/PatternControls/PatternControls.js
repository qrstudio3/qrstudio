import React from 'react';
import './PatternControls.css';

export function PatternControls({ scale, onScaleChange }) {
    return (
        <div className="pattern-controls">
            <div className="pattern-control-group">
                <label className="pattern-control-label">
                    <span className="pattern-label-text">Zoom</span>
                    <span className="pattern-value">{scale.toFixed(2)}x</span>
                </label>
                <input
                    type="range"
                    min="1"
                    max="5"
                    step="0.1"
                    value={scale}
                    onChange={(e) => onScaleChange(parseFloat(e.target.value))}
                    className="pattern-slider"
                />
            </div>
        </div>
    );
}
