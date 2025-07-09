'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import { useScroll, useSpring } from 'framer-motion'
import { ScatterDots } from './ScatterDots'



export default function GlobeCanvas({
  onBurstComplete,
}: {
  onBurstComplete?: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
  })

  const triggered = useRef(false)
  smooth.on('change', (v) => {
    if (v >= 1 && !triggered.current) {
      onBurstComplete?.()
      triggered.current = true
    }
  })

  return (
    <div ref={ref} className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={1} />
        <ScatterDots scrollProgress={smooth} />
        
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
      </Canvas>
    </div>
  )
}
