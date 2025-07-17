import React, { useRef, useEffect } from 'react';
import qr from 'qr.js';

export function QRCodeCanvas({ text, fillType, solidColor, gradientStart, gradientEnd, patternImage, logo, borderWidth, borderColor, borderRadius, }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
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

    function drawModules(styleArg) {
      ctx.fillStyle = styleArg;
      modules.forEach((row, r) => {
        row.forEach((cellOn, c) => {
          if (cellOn) ctx.fillRect(margin + c * cell, margin + r * cell, cell, cell);
        });
      });
    }

    if (fillType === 'image' && patternImage) {
      const img = new Image();
      img.onload = () => {
        const pat = ctx.createPattern(img, 'repeat');
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
        const sz = size * 0.2;
        const x = (size - sz) / 2;
        const y = (size - sz) / 2;
        const radius = borderRadius;

        // white background
        ctx.fillStyle = '#fff';
        roundedRect(ctx, x, y, sz, sz, radius);
        ctx.fill();

        // border stroke
        ctx.lineWidth = borderWidth;
        ctx.strokeStyle = borderColor;
        roundedRect(ctx, x, y, sz, sz, radius);
        ctx.stroke();

        // clip and draw logo
        ctx.save();
        roundedRect(ctx, x, y, sz, sz, radius);
        ctx.clip();
        ctx.drawImage(img, x, y, sz, sz);
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
  }, [text, fillType, solidColor, gradientStart, gradientEnd, patternImage, logo, borderWidth, borderColor, borderRadius]);

  return <canvas ref={ref} width={300} height={300} className="border" />;
}
