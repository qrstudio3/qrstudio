import React, { useState } from 'react';
import { TextInput } from '../TextInput/TextInput';
import { FillTypeSelector } from '../FillTypeSelector/FillTypeSelector';
import { ColorPickerGroup } from '../ColorPickerGroup/ColorPickerGroup';
import { PatternUploader } from '../PatternUploader/PatternUploader';
import { PatternControls } from '../PatternControls/PatternControls';
import { QRStyleSelector } from '../QRStyleSelector/QRStyleSelector';
import { LogoUploader } from '../LogoUploader/LogoUploader';
import { QRCodeCanvas } from '../QRCodeCanvas/QRCodeCanvas';
import { BorderControls } from '../BorderControls/BorderControls';
import './Generator.css';

export function Generator() {
    const [text, setText] = useState('Hello, world!');
    const [qrStyle, setQrStyle] = useState('squares');
    const [fillType, setFillType] = useState('solid');
    const [solidColor, setSolidColor] = useState('#000000');
    const [gradientStart, setGradientStart] = useState('#000000');
    const [gradientEnd, setGradientEnd] = useState('#555555');
    const [patternImage, setPatternImage] = useState(null);
    const [patternScale, setPatternScale] = useState(1);
    const [logo, setLogo] = useState(null);
    const [borderWidth, setBorderWidth] = useState(4);
    const [borderColor, setBorderColor] = useState('#000000');
    const [borderRadius, setBorderRadius] = useState(8);

    return (
        <div className="generator-container">
            <div className="generator-controls">
                <TextInput text={text} onChange={setText} />

                <div className="section-divider-gen">
                    <span className="divider-text">QR Code Style</span>
                </div>

                <QRStyleSelector qrStyle={qrStyle} onSelect={setQrStyle} />

                <div className="section-divider-gen">
                    <span className="divider-text">Customize Style</span>
                </div>

                <FillTypeSelector fillType={fillType} onSelect={setFillType} />

                {fillType === 'image' ? (
                    <>
                        <PatternUploader onUpload={setPatternImage} />
                        {patternImage && (
                            <PatternControls
                                scale={patternScale}
                                onScaleChange={setPatternScale}
                            />
                        )}
                    </>
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

                <div className="section-divider-gen">
                    <span className="divider-text">Add Logo (Optional)</span>
                </div>

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
            </div>

            <div className="generator-preview">
                <QRCodeCanvas
                    text={text}
                    qrStyle={qrStyle}
                    fillType={fillType}
                    solidColor={solidColor}
                    gradientStart={gradientStart}
                    gradientEnd={gradientEnd}
                    patternImage={patternImage}
                    patternScale={patternScale}
                    logo={logo}
                    borderWidth={borderWidth}
                    borderColor={borderColor}
                    borderRadius={borderRadius}
                />

                <div className="scan-info-gen">
                    <svg className="info-icon-gen" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16v-4m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <p className="scan-text-gen">
                        Scans to: <strong className="scan-value-gen">{text || '(empty)'}</strong>
                    </p>
                </div>
            </div>
        </div>
    );
}
