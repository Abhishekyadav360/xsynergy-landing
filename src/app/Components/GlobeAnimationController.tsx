'use client'
import { useFrame } from '@react-three/fiber'
import { motionValue } from 'framer-motion'
import { useRef } from 'react'

export default function GlobeAnimationController({
  progress,
  unlockScroll
}: {
  progress: ReturnType<typeof motionValue>
  unlockScroll: () => void
}) {
  const startTime = useRef<number | null>(null)
  const unlocked = useRef(false)

  useFrame(() => {
    if (startTime.current === null) {
      startTime.current = performance.now()
    }

    const elapsed = (performance.now() - startTime.current) / 1000
    const value = Math.min(elapsed / 3.5, 1)
    progress.set(value)

    if (value >= 1 && !unlocked.current) {
      unlockScroll()
      unlocked.current = true
    }
  })

  return null
}
