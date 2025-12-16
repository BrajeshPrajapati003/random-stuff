import { motion, LayoutGroup } from 'motion/react'
import React from 'react'

function GroupedLayout() {
  return (
    <div>
        <LayoutGroup>
            {/* Coordinated layout animations (zero collision glitches) */}
            <motion.div className='bg-purple-600 p-3'
                layout
            >Header</motion.div>
            <motion.div className='bg-purple-400/10 p-3'
                layout
            >Content</motion.div>
        </LayoutGroup>

        <motion.div
            layout
            transition={{
                layout: {duration: 0.3, ease: "easeOut"},
            }}
        >Smooth AF</motion.div>
    </div>
  )
}

export default GroupedLayout
