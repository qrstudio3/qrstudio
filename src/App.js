import React, { useState } from 'react';
import { TextInput } from './components/TextInput';
import { FillTypeSelector } from './components/FillTypeSelector';
import { ColorPickerGroup } from './components/ColorPickerGroup';
import { PatternUploader } from './components/PatternUploader';
import { LogoUploader } from './components/LogoUploader';
import { QRCodeCanvas } from './components/QRCodeCanvas';
import { BorderControls } from './components/BorderControls';


export default function App() {
  const [text, setText] = useState('Hello, world!');
  const [fillType, setFillType] = useState('solid');
  const [solidColor, setSolidColor] = useState('#000000');
  const [gradientStart, setGradientStart] = useState('#000000');
  const [gradientEnd, setGradientEnd] = useState('#555555');
  const [patternImage, setPatternImage] = useState(null);
  const [logo, setLogo] = useState(null);
  const [borderWidth, setBorderWidth] = useState(4);
const [borderColor, setBorderColor] = useState('#000000');
const [borderRadius, setBorderRadius] = useState(8);


  return (
    <div className="font-sans text-center p-6">
      <h1 className="text-2xl mb-4">QR Code Designer</h1>

      <TextInput text={text} onChange={setText} />
      <FillTypeSelector fillType={fillType} onSelect={setFillType} />
      {fillType === 'image' ? (
        <PatternUploader onUpload={setPatternImage} />
      ) : (
        <ColorPickerGroup
          fillType={fillType}
          solidColor={solidColor}
          gradientStart={gradientStart}
          gradientEnd={gradientEnd}
          onSolid={setSolidColor}
          onStart={setGradientStart}
          onEnd={setGradientEnd}
        />
      )}

      <LogoUploader logo={logo} onUpload={setLogo} />
{logo && (
  <BorderControls
    borderWidth={borderWidth}
    onWidthChange={setBorderWidth}
    borderColor={borderColor}
    onColorChange={setBorderColor}
    borderRadius={borderRadius}
    onRadiusChange={setBorderRadius}
  />
)}

     <QRCodeCanvas
        text={text}
        fillType={fillType}
        solidColor={solidColor}
        gradientStart={gradientStart}
        gradientEnd={gradientEnd}
        patternImage={patternImage}
        logo={logo}
        borderWidth={borderWidth}
        borderColor={borderColor}
        borderRadius={borderRadius}
      />

      <p className="mt-4 text-gray-600">
        Scans to: <strong>{text || '(empty)'}</strong>
      </p>
    </div>
  );
}
