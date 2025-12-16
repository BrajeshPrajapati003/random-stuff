import React from 'react'
import {motion} from "motion/react"

function DraggableCard() {
  return (
    <motion.div className='bg-cyan-400 text-black rounded-sm p-2 w-[120px] cursor-pointer italic shadow-cyan-300 shadow-lg/30 m-4'
        drag 
        dragConstraints={{left: -120, right: 120, top: -70, bottom: 70}}
        dragElastic={0.2}
    >
      Drag Me!</motion.div>
  )
}

export default DraggableCard
