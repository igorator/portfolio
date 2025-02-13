'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const LinesBackgroundAnimation = () => {
  const canvasRef = useRef(null);
  const headerRef = useRef(null);
  const [config, setConfig] = useState({
    theme: 'dark',
    cell: 28,
    alpha: 1,
    line: 0.75,
    width: 3,
    speed: 0.15,
    size: 100,
    threshold: 0.01,
    intensity: 0.9,
    spotlight: true,
    stopOne: 100,
    stopTwo: 100,
    angle: 0,
    adjust: false,
  });

  const cells = useRef([]);
  const linesCtx = useRef(null);

  const drawLines = () => {
    if (!linesCtx.current) return;
    linesCtx.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height,
    );
    cells.current.forEach((cell) => {
      linesCtx.current.save();
      linesCtx.current.translate(cell.x, cell.y);
      linesCtx.current.rotate(cell.a);
      linesCtx.current.beginPath();
      linesCtx.current.globalAlpha = config.alpha;
      linesCtx.current.lineWidth = config.width;
      linesCtx.current.strokeStyle = 'canvasText';
      linesCtx.current.moveTo((config.cell * config.line * -1) / 2, 0);
      linesCtx.current.lineTo((config.cell * config.line) / 2, 0);
      linesCtx.current.stroke();
      linesCtx.current.restore();
    });
  };

  const initializeLines = () => {
    const { width, height } = canvasRef.current.getBoundingClientRect();
    canvasRef.current.width = width * window.devicePixelRatio;
    canvasRef.current.height = height * window.devicePixelRatio;
    linesCtx.current.scale(window.devicePixelRatio, window.devicePixelRatio);
    cells.current.length = 0;
    for (let x = 0; x < width; x += config.cell) {
      for (let y = 0; y < height; y += config.cell) {
        cells.current.push({
          x: x + config.cell * 0.5,
          y: y + config.cell * 0.5,
          r: 0,
          t: 0,
        });
      }
    }
    gsap.ticker.add(drawLines);
  };

  const getShortestRotation = (current, target) => {
    let diff = target - current;
    if (diff > Math.PI) diff -= 2 * Math.PI;
    if (diff < -Math.PI) diff += 2 * Math.PI;
    return diff;
  };

  const syncLines = ({ x, y }) => {
    const { left, top } = canvasRef.current.getBoundingClientRect();
    headerRef.current.style.setProperty('--mx', Math.floor(x - left));
    headerRef.current.style.setProperty('--my', Math.floor(y - top));
    cells.current.forEach((cell) => {
      const dx = x - (cell.x + left);
      const dy = y - (cell.y + top);
      const newAngle = Math.atan2(dy, dx);
      const diff = getShortestRotation(cell.a, newAngle);

      if (Math.abs(diff) > config.threshold) {
        cell.a += diff * config.speed;
        // Normalize angle to be between -PI and PI
        cell.a = ((cell.a + Math.PI) % (2 * Math.PI)) - Math.PI;
      } else {
        cell.a = newAngle;
      }
      cell.t = newAngle;
    });
  };

  const handleChange = () => {
    initializeLines();
  };

  const update = () => {
    document.documentElement.dataset.theme = config.theme;
    document.documentElement.dataset.spotlight = config.spotlight;
    document.documentElement.dataset.adjust = config.adjust;
    headerRef.current.style.setProperty('--intensity', 1 - config.intensity);
    headerRef.current.style.setProperty('--mask-size', config.size);
    headerRef.current.style.setProperty('--mask-s1', config.stopOne);
    headerRef.current.style.setProperty('--mask-s2', config.stopTwo);
    headerRef.current.style.setProperty('--mask-angle', config.angle);
  };

  const handlePointerMove = (e) => {
    syncLines(e);
  };

  const handleDragStart = (e) => {
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;

    const dragMove = (moveEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;
      headerRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    };

    const dragEnd = () => {
      window.removeEventListener('mousemove', dragMove);
      window.removeEventListener('mouseup', dragEnd);
    };

    window.addEventListener('mousemove', dragMove);
    window.addEventListener('mouseup', dragEnd);
  };

  useEffect(() => {
    linesCtx.current = canvasRef.current.getContext('2d');
    const sizeObserver = new ResizeObserver(() => {
      initializeLines();
      update();
    });
    sizeObserver.observe(canvasRef.current);

    window.addEventListener('pointermove', handlePointerMove);
    headerRef.current.addEventListener('mousedown', handleDragStart);

    initializeLines();
    update();

    return () => {
      sizeObserver.disconnect();
      window.removeEventListener('pointermove', handlePointerMove);
      headerRef.current.removeEventListener('mousedown', handleDragStart);
    };
  }, [config]);

  return (
    <header ref={headerRef}>
      <canvas ref={canvasRef}></canvas>
      <div className='controls'>
        <label>
          Theme:
          <select
            value={config.theme}
            onChange={(e) => setConfig({ ...config, theme: e.target.value })}
          >
            <option value='light'>Light</option>
            <option value='dark'>Dark</option>
            <option value='system'>System</option>
          </select>
        </label>
        <label>
          Spotlight:
          <input
            type='checkbox'
            checked={config.spotlight}
            onChange={(e) =>
              setConfig({ ...config, spotlight: e.target.checked })
            }
          />
        </label>
        <label>
          Adjust:
          <input
            type='checkbox'
            checked={config.adjust}
            onChange={(e) => setConfig({ ...config, adjust: e.target.checked })}
          />
        </label>
      </div>
    </header>
  );
};

export default LinesBackgroundAnimation;
