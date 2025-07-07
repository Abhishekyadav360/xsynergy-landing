"use client";

import React, { useRef, useEffect } from "react";

const Loader: React.FC<{ onFinish?: () => void }> = ({ onFinish }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    const fontSize = 20;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(0);

    const maxFrames = Math.ceil(canvas.height / fontSize) ; // slightly faster
    let frame = 0;

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
      }

      frame++;

      if (frame < maxFrames) {
        requestAnimationFrame(draw);
      } else {
        onFinish?.(); 
      }
    };

    draw();
  }, [onFinish]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] w-full h-full bg-black min-h-screen"
    />
  );
};

export default Loader;