import React, { useRef, useEffect } from 'react';

const GridBackground = ({ 
  lineColor = 'rgba(255, 255, 255, 0.1)', 
  lineOpacity = 0.1, 
  speed = 0.5, 
  density = 50 
}) => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef();
  const offsetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    const drawGrid = (time) => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      
      // Gentle animation offset
      offsetRef.current.x = Math.sin(time * 0.0005) * 2;
      offsetRef.current.y = Math.cos(time * 0.0003) * 2;

      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = lineOpacity;

      // Draw vertical lines
      for (let x = offsetRef.current.x; x < window.innerWidth; x += density) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, window.innerHeight);
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = offsetRef.current.y; y < window.innerHeight; y += density) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(window.innerWidth, y);
        ctx.stroke();
      }

      // Check for reduced motion preference
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        animationId = requestAnimationFrame(drawGrid);
      }
    };

    resizeCanvas();
    drawGrid(0);

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [lineColor, lineOpacity, speed, density]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

export default GridBackground;