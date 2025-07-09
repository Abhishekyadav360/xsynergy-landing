'use client'

import { useRef, useEffect, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { MotionValue } from 'framer-motion'

export function ScatterDots({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const base = useRef<THREE.Vector3[]>([])
  const geom = useRef<THREE.BufferGeometry>(null!)
  const positions = useMemo(() => new Float32Array(800 * 3), [])
  const progressRef = useRef(0)

  // Generate random points once
  useEffect(() => {
    const arr: THREE.Vector3[] = []
    for (let i = 0; i < 800; i++) {
      const phi = Math.acos(2 * Math.random() - 1)
      const theta = 2 * Math.PI * Math.random()
      arr.push(
        new THREE.Vector3(
          Math.sin(phi) * Math.cos(theta),
          Math.sin(phi) * Math.sin(theta),
          Math.cos(phi)
        )
      )
    }
    base.current = arr
  }, [])

  // Subscribe to scroll progress (no useMotionValueEvent)
  useEffect(() => {
    const unsubscribe = scrollProgress.on('change', (v) => {
      progressRef.current = v
    })
    return () => unsubscribe()
  }, [scrollProgress])

  // Update dots position based on scroll
  useFrame(() => {
    const factor = 1.2 + progressRef.current * 4
    base.current.forEach((v, i) => {
      const p = v.clone().multiplyScalar(factor)
      positions.set([p.x, p.y, p.z], i * 3)
    })

    if (geom.current?.attributes?.position) {
      geom.current.attributes.position.needsUpdate = true
    }
  })

  return (
    <points>
      <bufferGeometry ref={geom}>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        color="#00FF66"
        size={0.015}
        sizeAttenuation
      />
    </points>
  )
}
