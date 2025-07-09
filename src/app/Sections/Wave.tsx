'use client';
import { useEffect, useRef } from 'react';

export default function Wave() {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const svg = svgRef.current;
    svg.innerHTML = '';

    const svgNS = 'http://www.w3.org/2000/svg';
    const width = 2000;
    const height = 250;
    const centerY = height / 2;

    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', String(height));
    svg.setAttribute('preserveAspectRatio', 'none');

    // Style
    const style = document.createElement('style');
    style.textContent = `
      .glow-wave {
        stroke-width: 2;
        stroke-linecap: round;
        fill: none;
        filter: drop-shadow(0 0 8px rgba(50,245,141,0.6));
      }
      .particle {
        r: 2;
        opacity: 0.6;
        animation: moveParticle 20s linear infinite;
        filter: drop-shadow(0 0 4px rgba(50,245,141,0.8));
        will-change: transform;
      }
      @keyframes moveParticle {
        0% { transform: translateX(-2000px); }
        100% { transform: translateX(2000px); }
      }
    `;
    svg.appendChild(style);

    const colors = ['#32f58d', '#22c55e', '#84e1bc'];

    // === DYNAMIC WAVE CREATION ===
    const waveGroup = document.createElementNS(svgNS, 'g');
    svg.appendChild(waveGroup);

    const waves = colors.map((color) => {
      const path = document.createElementNS(svgNS, 'path');
      path.setAttribute('stroke', color);
      path.setAttribute('class', 'glow-wave');
      waveGroup.appendChild(path);
      return path;
    });

    const step = 20;
    const pointCount = Math.floor(width / step);
    const timeOffsets = waves.map(() => Math.random() * 1000);

    function drawWave(time) {
      waves.forEach((path, i) => {
        const amplitude = 12 + i * 4;
        const freq = 0.004 + i * 0.0005;
        const phase = time * 0.002 + timeOffsets[i];
        const baseY = centerY + (i - 1) * 20;

        let d = `M 0 ${baseY}`;
        for (let j = 0; j <= pointCount; j++) {
          const x = j * step;
          const y = baseY + amplitude * Math.sin(x * freq + phase);
          d += ` L ${x} ${y}`;
        }

        path.setAttribute('d', d);
      });

      requestAnimationFrame(drawWave);
    }

    requestAnimationFrame(drawWave);

    // === PARTICLES ===
    const particleGroup = document.createElementNS(svgNS, 'g');
    svg.appendChild(particleGroup);
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      const circle = document.createElementNS(svgNS, 'circle');
      const x = Math.random() * width;
      const y = centerY + (Math.random() - 0.5) * 80;
      const radius = Math.random() * 2 + 1;

      circle.setAttribute('cx', String(x));
      circle.setAttribute('cy', String(y));
      circle.setAttribute('r', String(radius));
      circle.setAttribute('fill', colors[i % colors.length]);
      circle.setAttribute('class', 'particle');
      circle.setAttribute('style', `animation-delay: ${Math.random() * 12}s`);
      particleGroup.appendChild(circle);
    }
  }, []);

  return (
    <section className="relative w-full  overflow-hidden h-[250px]">
      <svg ref={svgRef} className="absolute inset-0" />
    </section>
  );
}