import React, { useState, useEffect } from 'react';
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

    const [mobileTab, setMobileTab] = useState('content');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 968);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 968);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const renderContentControls = () => (
        <>
            <TextInput text={text} onChange={setText} />

            <div className="section-divider-gen">
                <span className="divider-text">QR Code Style</span>
            </div>

            <QRStyleSelector qrStyle={qrStyle} onSelect={setQrStyle} />
        </>
    );

    const renderStyleControls = () => (
        <>
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
        </>
    );

    const renderLogoControls = () => (
        <>
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
        </>
    );

    const renderMobileControls = () => {
        switch (mobileTab) {
            case 'content': return renderContentControls();
            case 'style': return renderStyleControls();
            case 'logo': return renderLogoControls();
            default: return renderContentControls();
        }
    };

    return (
        <div className={`generator-container ${isMobile ? 'mobile-view' : ''}`}>
            {isMobile ? (
                <>
                    <div className="mobile-preview-sticky">
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
                    </div>

                    <div className="mobile-controls-scroll">
                        {renderMobileControls()}
                        <div style={{ height: '80px' }}></div> {/* Spacer for bottom bar */}
                    </div>

                    <div className="mobile-toolbar-bottom">
                        <button
                            className={`mobile-tab-item ${mobileTab === 'content' ? 'active' : ''}`}
                            onClick={() => setMobileTab('content')}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                            </svg>
                            <span>Content</span>
                        </button>
                        <button
                            className={`mobile-tab-item ${mobileTab === 'style' ? 'active' : ''}`}
                            onClick={() => setMobileTab('style')}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <circle cx="12" cy="12" r="4" />
                            </svg>
                            <span>Style</span>
                        </button>
                        <button
                            className={`mobile-tab-item ${mobileTab === 'logo' ? 'active' : ''}`}
                            onClick={() => setMobileTab('logo')}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                                <line x1="16" y1="8" x2="2" y2="22" />
                                <line x1="17.5" y1="15" x2="9" y2="15" />
                            </svg>
                            <span>Logo</span>
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <div className="generator-controls">
                        {renderContentControls()}
                        <div className="section-divider-gen">
                            <span className="divider-text">Customize Style</span>
                        </div>
                        {renderStyleControls()}
                        <div className="section-divider-gen">
                            <span className="divider-text">Add Logo (Optional)</span>
                        </div>
                        {renderLogoControls()}
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
                </>
            )}
        </div>
    );
}
