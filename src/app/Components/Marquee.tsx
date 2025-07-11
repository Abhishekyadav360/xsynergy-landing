'use client'

import { motion } from 'framer-motion'

const Marquee = ({
  text = 'XSYNERGY IS THE FUTURE • POWERED BY POLYGON • REWARDS ON CHAIN',
  speed = 80,
}: {
  text?: string
  speed?: number
}) => {
  const baseText = `${text} `.repeat(20)

  return (
    <div className="w-full overflow-hidden whitespace-nowrap rounded-xl border-y border-[#33544e] bg-[#1c2224] py-2 max-w-3xl marqueebg">
      <motion.div
        className="flex gap-10 text-green-400 text-md sm:text-lg font-medium tracking-wide group-hover:paused"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          duration: baseText.length / speed,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        
        <span>{baseText}</span>
        <span>{baseText}</span>
      </motion.div>
    </div>
  )
}

export default Marquee
