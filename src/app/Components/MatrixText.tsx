'use client';

import React, { useEffect, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@$%&*#';

export default function MatrixText({
  text,
  speed = 50,
}: {
  text: string;
  speed?: number;
}) {
  const [output, setOutput] = useState<string[]>(Array(text.length).fill(''));

useEffect(() => {
  let frame = 0;

  const interval = setInterval(() => {
    const updated = text.split('').map((char, i) => {
      if (char === ' ') return ' ';
      if (i < frame) return char;
      return CHARS[Math.floor(Math.random() * CHARS.length)];
    });

    setOutput(updated);
    frame++;

    if (frame > text.length) clearInterval(interval);
  }, speed);

  return () => clearInterval(interval);
}, [text, speed]);

  return (
    <span className="inline-block  font-semibold text-span-gradient">
      {output.join('')}
    </span>
  );
}
