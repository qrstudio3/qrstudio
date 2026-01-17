export function QRCodeCanvas({
  text = 'https://example.com',
  fillType = 'solid',
  solidColor = '#000000',
  gradientStart = '#000000',
  gradientEnd = '#ff0000',
  patternImage,
  logo,
  borderWidth = 2,
  borderColor = '#000000',
  borderRadius = 8,
  dotStyle = 'dots',
  outerEyeStyle = 'square',
  innerEyeStyle = 'square'
}) {
  const ref = useRef(null);
  const qrRef = useRef(null);

  useEffect(() => {
    const options = {
      width: 300,
      height: 300,
      data: text || ' ',
      image: logo,
      imageOptions: {
        crossOrigin: 'anonymous',
        margin: 10,
      },
      dotsOptions: {
        type: dotStyle,
        color: solidColor,
      },
      cornersSquareOptions: {
        type: outerEyeStyle,
        color: solidColor,
      },
      cornersDotOptions: {
        type: innerEyeStyle,
        color: solidColor,
      },
      backgroundOptions: {
        color: '#ffffff',
      }
    };

    // Gradient fill
    if (fillType === 'gradient') {
      options.dotsOptions = {
        type: dotStyle,
        gradient: {
          type: 'linear',
          rotation: 0,
          colorStops: [
            { offset: 0, color: gradientStart },
            { offset: 1, color: gradientEnd }
          ]
        }
      };
    }

    // Background image fill
    if (fillType === 'image' && patternImage) {
      options.backgroundOptions = {
        image: patternImage,
        crossOrigin: 'anonymous'
      };
    }


    // Clear previous QR code if it exists
    if (qrRef.current && ref.current) {
      ref.current.innerHTML = '';
    }

    qrRef.current = new QRCodeStyling(options);
    qrRef.current.append(ref.current);
  }, [
    text,
    fillType,
    solidColor,
    gradientStart,
    gradientEnd,
    patternImage,
    logo,
    borderWidth,
    borderColor,
    borderRadius,
    dotStyle,
    outerEyeStyle,
    innerEyeStyle
  ]);

  return <div ref={ref} style={{ width: 300, height: 300 }} />;
} 
