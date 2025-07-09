'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

export function LogoMesh() {
  const ref = useRef<THREE.Mesh>(null!)
  const texture = useTexture('/logo.webp') // <-- Put your logo inside public/logo.png

  // Optional animation
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002
    }
  })

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <planeGeometry args={[0.5, 0.5]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  )
}
