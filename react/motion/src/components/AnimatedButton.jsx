import React from 'react'
import { motion } from 'motion/react'

function AnimatedButton({
    children,
    stiffness = 300,
    damping = 15,
  
}) {
  return (
    <motion.button className='m-4'
        whileHover={{ scale: 1.05, y:-2 }}
        whileTap={{ scale: 0.9, y:1 }}
        transition={{ type: "spring", stiffness, damping}}
    >
        {children}
    </motion.button>
  )
}

export default AnimatedButton
