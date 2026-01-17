import React, { useRef, useEffect, useState } from 'react';
import qr from 'qr.js';
import './QRCodeCanvas.css';

export function QRCodeCanvas({ text, qrStyle = 'squares', fillType, solidColor, gradientStart, gradientEnd, patternImage, patternScale = 1, logo, borderWidth, borderColor, borderRadius }) {
  const canvasRef = useRef(null);
  const [showResolutionMenu, setShowResolutionMenu] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const size = 300;
    const margin = 10;
    const code = qr(text || ' ');
    const modules = code.modules;
    const count = modules.length;
    const cell = (size - margin * 2) / count;

    ctx.clearRect(0, 0, size, size);
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, size, size);

    let style = solidColor;
    if (fillType === 'gradient') {
      const grad = ctx.createLinearGradient(0, margin, 0, size - margin);
      grad.addColorStop(0, gradientStart);
      grad.addColorStop(1, gradientEnd);
      style = grad;
    }

    // Helper function to check if a module is part of position detection pattern (eyes)
    function isPositionDetectionPattern(r, c, count) {
      // QR position detection patterns are 7x7 located at three corners
      // Top-left corner
      if (r < 7 && c < 7) return true;
      // Top-right corner
      if (r < 7 && c >= count - 7) return true;
      // Bottom-left corner
      if (r >= count - 7 && c < 7) return true;
      return false;
    }

    function drawModules(styleArg) {
      ctx.fillStyle = styleArg;
      modules.forEach((row, r) => {
        row.forEach((cellOn, c) => {
          if (cellOn) {
            const x = margin + c * cell;
            const y = margin + r * cell;

            // Always use squares for position detection patterns (eyes)
            if (isPositionDetectionPattern(r, c, count)) {
              ctx.fillRect(x, y, cell, cell);
            } else {
              // Apply selected style for other modules
              switch (qrStyle) {
                case 'dots':
                  ctx.beginPath();
                  ctx.arc(x + cell / 2, y + cell / 2, cell / 2 * 0.85, 0, Math.PI * 2);
                  ctx.fill();
                  break;
                case 'rounded':
                  roundedRect(ctx, x, y, cell, cell, cell * 0.25);
                  ctx.fill();
                  break;
                case 'classy':
                  const spacing = cell * 0.1;
                  roundedRect(ctx, x + spacing, y + spacing,
                    cell - spacing * 2, cell - spacing * 2, cell * 0.3);
                  ctx.fill();
                  break;
                default: // squares
                  ctx.fillRect(x, y, cell, cell);
              }
            }
          }
        });
      });
    }

    if (fillType === 'image' && patternImage) {
      const img = new Image();
      img.onload = () => {
        // Create an offscreen canvas for the scaled pattern
        const patternCanvas = document.createElement('canvas');
        const patternSize = 100; // Base pattern size
        const scaledSize = patternSize * patternScale;
        patternCanvas.width = scaledSize;
        patternCanvas.height = scaledSize;
        const patternCtx = patternCanvas.getContext('2d');

        // Draw the scaled image
        patternCtx.drawImage(img, 0, 0, scaledSize, scaledSize);

        // Create pattern from scaled canvas
        const pat = ctx.createPattern(patternCanvas, 'repeat');





        // Draw modules with pattern
        drawModules(pat);



        drawLogo();
      };
      img.src = patternImage;
    } else {
      drawModules(style);
      drawLogo();
    }

    function drawLogo() {
      if (!logo) return;
      const img = new Image();
      img.onload = () => {
        // Calculate dimensions preserving aspect ratio
        const maxSize = size * 0.2;
        const imgAspect = img.width / img.height;

        let logoWidth, logoHeight;
        if (imgAspect > 1) {
          // Landscape: width is limiting
          logoWidth = maxSize;
          logoHeight = maxSize / imgAspect;
        } else {
          // Portrait or square: height is limiting
          logoHeight = maxSize;
          logoWidth = maxSize * imgAspect;
        }

        const x = (size - logoWidth) / 2;
        const y = (size - logoHeight) / 2;
        const radius = borderRadius;

        // white background
        ctx.fillStyle = '#fff';
        roundedRect(ctx, x, y, logoWidth, logoHeight, radius);
        ctx.fill();

        // border stroke
        ctx.lineWidth = borderWidth;
        ctx.strokeStyle = borderColor;
        roundedRect(ctx, x, y, logoWidth, logoHeight, radius);
        ctx.stroke();

        // clip and draw logo
        ctx.save();
        roundedRect(ctx, x, y, logoWidth, logoHeight, radius);
        ctx.clip();
        ctx.drawImage(img, x, y, logoWidth, logoHeight);
        ctx.restore();
      };
      img.src = logo;
    }

    function roundedRect(ctx, x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
    }
  }, [text, qrStyle, fillType, solidColor, gradientStart, gradientEnd, patternImage, patternScale, logo, borderWidth, borderColor, borderRadius]);

  const handleDownload = (resolution = 'medium') => {
    const sizes = {
      low: 512,
      medium: 1024,
      high: 2048,
      ultra: 4096
    };

    const targetSize = sizes[resolution];
    const offscreen = document.createElement('canvas');
    offscreen.width = targetSize;
    offscreen.height = targetSize;
    const ctx = offscreen.getContext('2d');

    // Calculate scale factor
    const scale = targetSize / 300;
    const margin = 10 * scale;
    const code = qr(text || ' ');
    const modules = code.modules;
    const count = modules.length;
    const cell = (targetSize - margin * 2) / count;

    // Clear and set white background
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, targetSize, targetSize);

    // Setup fill style
    let style = solidColor;
    if (fillType === 'gradient') {
      const grad = ctx.createLinearGradient(0, margin, 0, targetSize - margin);
      grad.addColorStop(0, gradientStart);
      grad.addColorStop(1, gradientEnd);
      style = grad;
    }

    // Helper function for position detection
    function isPositionDetectionPattern(r, c, count) {
      if (r < 7 && c < 7) return true;
      if (r < 7 && c >= count - 7) return true;
      if (r >= count - 7 && c < 7) return true;
      return false;
    }

    // Helper function for rounded rectangles
    function roundedRect(ctx, x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
    }

    // Draw modules function
    function drawModules(styleArg) {
      ctx.fillStyle = styleArg;
      modules.forEach((row, r) => {
        row.forEach((cellOn, c) => {
          if (cellOn) {
            const x = margin + c * cell;
            const y = margin + r * cell;

            if (isPositionDetectionPattern(r, c, count)) {
              ctx.fillRect(x, y, cell, cell);
            } else {
              switch (qrStyle) {
                case 'dots':
                  ctx.beginPath();
                  ctx.arc(x + cell / 2, y + cell / 2, cell / 2 * 0.85, 0, Math.PI * 2);
                  ctx.fill();
                  break;
                case 'rounded':
                  roundedRect(ctx, x, y, cell, cell, cell * 0.25);
                  ctx.fill();
                  break;
                case 'classy':
                  const spacing = cell * 0.1;
                  roundedRect(ctx, x + spacing, y + spacing,
                    cell - spacing * 2, cell - spacing * 2, cell * 0.3);
                  ctx.fill();
                  break;
                default:
                  ctx.fillRect(x, y, cell, cell);
              }
            }
          }
        });
      });
    }

    // Handle pattern image
    if (fillType === 'image' && patternImage) {
      const img = new Image();
      img.onload = () => {
        const patternCanvas = document.createElement('canvas');
        const patternSize = 100 * scale;
        const scaledSize = patternSize * patternScale;
        patternCanvas.width = scaledSize;
        patternCanvas.height = scaledSize;
        const patternCtx = patternCanvas.getContext('2d');
        patternCtx.drawImage(img, 0, 0, scaledSize, scaledSize);
        const pat = ctx.createPattern(patternCanvas, 'repeat');
        drawModules(pat);
        drawLogoAndDownload();
      };
      img.src = patternImage;
    } else {
      drawModules(style);
      drawLogoAndDownload();
    }

    function drawLogoAndDownload() {
      if (logo) {
        const logoImg = new Image();
        logoImg.onload = () => {
          const maxSize = targetSize * 0.2;
          const imgAspect = logoImg.width / logoImg.height;

          let logoWidth, logoHeight;
          if (imgAspect > 1) {
            logoWidth = maxSize;
            logoHeight = maxSize / imgAspect;
          } else {
            logoHeight = maxSize;
            logoWidth = maxSize * imgAspect;
          }

          const x = (targetSize - logoWidth) / 2;
          const y = (targetSize - logoHeight) / 2;
          const radius = borderRadius * scale;

          // white background
          ctx.fillStyle = '#fff';
          roundedRect(ctx, x, y, logoWidth, logoHeight, radius);
          ctx.fill();

          // border stroke
          ctx.lineWidth = borderWidth * scale;
          ctx.strokeStyle = borderColor;
          roundedRect(ctx, x, y, logoWidth, logoHeight, radius);
          ctx.stroke();

          // clip and draw logo
          ctx.save();
          roundedRect(ctx, x, y, logoWidth, logoHeight, radius);
          ctx.clip();
          ctx.drawImage(logoImg, x, y, logoWidth, logoHeight);
          ctx.restore();

          performDownload();
        };
        logoImg.src = logo;
      } else {
        performDownload();
      }
    }

    function performDownload() {
      const link = document.createElement('a');
      link.download = `qr-code-${resolution}-${Date.now()}.png`;
      link.href = offscreen.toDataURL('image/png');
      link.click();
      setShowResolutionMenu(false);
    }
  };

  return (
    <div className="qr-canvas-container">
      <div className="canvas-wrapper">
        <canvas ref={canvasRef} width={300} height={300} className="qr-canvas" />
      </div>
      <div className="download-container">
        <button
          onClick={() => setShowResolutionMenu(!showResolutionMenu)}
          className="download-button"
        >
          <svg className="download-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 11l5 5 5-5M12 4v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Download QR Code
          <svg className="dropdown-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {showResolutionMenu && (
          <div className="resolution-menu">
            <button onClick={() => handleDownload('low')} className="resolution-option">
              <span className="resolution-label">Low</span>
              <span className="resolution-size">512×512</span>
            </button>
            <button onClick={() => handleDownload('medium')} className="resolution-option">
              <span className="resolution-label">Medium</span>
              <span className="resolution-size">1024×1024</span>
            </button>
            <button onClick={() => handleDownload('high')} className="resolution-option">
              <span className="resolution-label">High</span>
              <span className="resolution-size">2048×2048</span>
            </button>
            <button onClick={() => handleDownload('ultra')} className="resolution-option">
              <span className="resolution-label">Ultra</span>
              <span className="resolution-size">4096×4096</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
