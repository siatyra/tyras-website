'use client'

import { motion } from 'framer-motion'

import { TransitionProps } from '../../interfaces'

export const NavLink = ({ delay, children }: TransitionProps): React.ReactElement => {
  return (
    <motion.div
      initial={{ 
        x: '-100px',
        opacity: 0 
      }}
      animate={{ 
        x: '0px',
        opacity: 1
      }}
      exit={{ 
        x: '-100px',
        opacity: 0
      }}
      transition={{
        duration: 1,
        delay: delay
      }}
    >
      {children}
    </motion.div>
  )
}
