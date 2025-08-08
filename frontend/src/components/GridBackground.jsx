import React, { useRef, useEffect, useState } from 'react';

const GridBackground = ({ 
  lineColor = 'rgba(59, 130, 246, 0.3)', 
  lineOpacity = 0.3, 
  speed = 0.5, 
  gridSize = 60 
}) => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef();
  const offsetRef = useRef({ x: 0, y: 0, z: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    // Mouse tracking for parallax effect
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 10
      });
    };

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    const draw3DGrid = (time) => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      
      // Animation offsets
      offsetRef.current.z = (time * 0.02) % gridSize;
      const parallaxX = mousePos.x * 0.3;
      const parallaxY = mousePos.y * 0.3;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const vanishingPoint = { x: centerX + parallaxX, y: centerY - 200 + parallaxY };

      // 3D Grid parameters
      const gridDepth = 20;
      const perspective = 800;

      for (let depth = 0; depth < gridDepth; depth++) {
        const z = depth * gridSize - offsetRef.current.z;
        if (z <= 0) continue;

        // Calculate perspective scaling and positioning
        const scale = perspective / (perspective + z);
        const alpha = Math.max(0.1, Math.min(lineOpacity * 2, lineOpacity * 2 * (1 - depth / gridDepth)));
        
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = depth < 3 ? 'rgba(34, 211, 238, ' + alpha + ')' : 'rgba(59, 130, 246, ' + alpha + ')';
        ctx.lineWidth = Math.max(0.8, 2 * scale);

        // Grid dimensions at this depth
        const gridWidth = window.innerWidth * 2 * scale;
        const gridHeight = window.innerHeight * 2 * scale;
        const startX = vanishingPoint.x - gridWidth / 2;
        const startY = vanishingPoint.y - gridHeight / 2;

        // Vertical lines
        for (let x = 0; x <= gridWidth; x += gridSize * scale) {
          const lineX = startX + x;
          if (lineX >= -50 && lineX <= window.innerWidth + 50) {
            ctx.beginPath();
            ctx.moveTo(lineX, Math.max(0, startY));
            ctx.lineTo(lineX, Math.min(window.innerHeight, startY + gridHeight));
            ctx.stroke();
          }
        }

        // Horizontal lines
        for (let y = 0; y <= gridHeight; y += gridSize * scale) {
          const lineY = startY + y;
          if (lineY >= -50 && lineY <= window.innerHeight + 50) {
            ctx.beginPath();
            ctx.moveTo(Math.max(0, startX), lineY);
            ctx.lineTo(Math.min(window.innerWidth, startX + gridWidth), lineY);
            ctx.stroke();
          }
        }

        // Add some perspective lines (connecting to vanishing point)
        if (depth === 0) {
          ctx.globalAlpha = lineOpacity * 0.8;
          ctx.strokeStyle = 'rgba(59, 130, 246, ' + (lineOpacity * 0.8) + ')';
          ctx.lineWidth = 1.5;
          
          // Corner perspective lines
          const corners = [
            { x: 0, y: 0 },
            { x: window.innerWidth, y: 0 },
            { x: 0, y: window.innerHeight },
            { x: window.innerWidth, y: window.innerHeight }
          ];
          
          corners.forEach(corner => {
            ctx.beginPath();
            ctx.moveTo(corner.x, corner.y);
            ctx.lineTo(vanishingPoint.x, vanishingPoint.y);
            ctx.stroke();
          });
        }
      }

      // Check for reduced motion preference  
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        animationId = requestAnimationFrame(draw3DGrid);
      } else {
        // Show static grid for reduced motion
        animationId = requestAnimationFrame(draw3DGrid);
      }
    };

    resizeCanvas();
    draw3DGrid(0);
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [lineColor, lineOpacity, speed, gridSize, mousePos.x, mousePos.y]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

export default GridBackground;