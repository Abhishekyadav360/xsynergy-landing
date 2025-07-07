"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/Assets/images/favicon1.webp";

const Loader: React.FC<{ onFinish?: () => void }> = ({ onFinish }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const dpr = window.devicePixelRatio || 1;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    const fontSize = 20;
    const columns = Math.floor(window.innerWidth / fontSize);
    const drops = Array(columns).fill(0);

    const maxFrames = Math.ceil(window.innerHeight / fontSize) + 30;
    let frame = 0;

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

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
        setIsDone(true);
        onFinish?.();
      }
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [onFinish]);

  if (isDone) return null;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black z-[9999]">
      <canvas ref={canvasRef} className="w-full h-full" />

      {/* ✅ Logo rendered immediately */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image
          src={logo}
          alt="Center Logo"
          width={128}
          height={128}
          priority
          className="max-w-16 w-full h-auto mx-auto animate-fade-in"
        />
      </div>
    </div>
  );
};

export default Loader;
