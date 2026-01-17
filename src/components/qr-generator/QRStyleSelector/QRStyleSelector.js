import React from 'react';
import './QRStyleSelector.css';

export function QRStyleSelector({ qrStyle, onSelect }) {
    const options = [
        { value: 'squares', label: 'Squares', icon: '⬛' },
        { value: 'dots', label: 'Dots', icon: '⚫' },
        { value: 'rounded', label: 'Rounded', icon: '⬜' },
        { value: 'classy', label: 'Classy', icon: '◉' },
    ];

    return (
        <div className="qr-style-selector">
            {options.map(opt => (
                <button
                    key={opt.value}
                    onClick={() => onSelect(opt.value)}
                    className={`style-option ${qrStyle === opt.value ? 'active' : ''}`}
                >
                    <span className="option-icon">{opt.icon}</span>
                    <span className="option-label">{opt.label}</span>
                    {qrStyle === opt.value && (
                        <div className="active-indicator" />
                    )}
                </button>
            ))}
        </div>
    );
}
