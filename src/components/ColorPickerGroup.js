import React from 'react';

export function ColorPickerGroup({ fillType, solidColor, gradientStart, gradientEnd, onSolid, onStart, onEnd }) {
  return (
    <div className="my-2">
      {fillType === 'solid' && (
        <input type="color" value={solidColor} onChange={e => onSolid(e.target.value)} />
      )}
      {fillType === 'gradient' && (
        <>
          <input type="color" value={gradientStart} onChange={e => onStart(e.target.value)} className="mr-2" />
          <input type="color" value={gradientEnd} onChange={e => onEnd(e.target.value)} />
        </>
      )}
    </div>
  );
}