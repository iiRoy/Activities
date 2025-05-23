'use client';
import React, { useState, useEffect } from 'react';

interface CustomTickProps {
  x?: number;
  y?: number;
  payload?: { value: string };
  numElements: number;
}

const CustomTick: React.FC<CustomTickProps> = ({
  x = 0,
  y = 0,
  payload = { value: '' },
  numElements,
}) => {
  const [chartWidth, setChartWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1000,
  );

  useEffect(() => {
    const updateWidth = () => setChartWidth(window.innerWidth);
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const getFontSize = () => Math.max(chartWidth / 75, 14);
  const getLineHeight = () => (chartWidth > 800 ? 18 : chartWidth > 400 ? 16 : 14);
  const fontSize = getFontSize();
  const lineHeight = getLineHeight();
  const maxWidth = chartWidth / (numElements * 2);

  const measureTextWidth = (text: string, fontSize: number) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (context) {
      context.font = `${fontSize}px sans-serif`;
      return context.measureText(text).width;
    }
    return 0;
  };

  const truncateWord = (word: string, maxWidth: number) => {
    if (measureTextWidth(word, fontSize) <= maxWidth) return word;
    let truncated = word;
    while (measureTextWidth(truncated + '...', fontSize) > maxWidth && truncated.length > 1) {
      truncated = truncated.slice(0, -1);
    }
    return truncated + '...';
  };

  const splitText = (text: string, maxWidth: number) => {
    const words = text.split(' ');
    const lines: string[] = [];
    let currentLine = '';

    words.forEach((word) => {
      const processedWord = truncateWord(word, maxWidth);
      const newLine = currentLine ? `${currentLine} ${processedWord}` : processedWord;
      const lineWidth = measureTextWidth(newLine, fontSize);

      if (lineWidth > maxWidth && currentLine) {
        lines.push(currentLine);
        currentLine = processedWord;
      } else {
        currentLine = newLine;
      }
    });

    if (currentLine) lines.push(currentLine);
    if (lines.length > 2) {
      if (!lines[1].endsWith('...')) lines[1] += '...';
      return lines.slice(0, 2);
    }
    if (lines.join(' ') !== text && !lines[lines.length - 1].endsWith('...'))
      lines[lines.length - 1] += '...';

    return lines;
  };

  const lines = splitText(payload?.value || '', maxWidth);

  return (
    <text x={x} y={y + 15} textAnchor='middle' fill='#8E76A3FF' fontSize={fontSize}>
      {lines.map((line, index) => (
        <tspan key={index} x={x} dy={index * lineHeight}>
          {line}
        </tspan>
      ))}
    </text>
  );
};

export default CustomTick;
