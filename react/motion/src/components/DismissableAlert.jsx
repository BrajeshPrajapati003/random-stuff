import React, { useState } from 'react'
import {motion, AnimatePresence} from 'motion/react'

function DismissableAlert() {

    const [open, setOpen] = useState(true);

  return (
    <div className='m-4'>
      <button onClick={() => setOpen((o) => !o)}>Toggle alert</button>
      {/* mode = sync | popLayout | wait */}
      <AnimatePresence mode='sync'>
        {
            open && (
                <motion.div className='bg-red-500 rounded-sm mt-2 p-1'
                    initial={{y:-10, opacity: 0}}
                    animate={{y:0, opacity: 1}}
                    exit={{y:-10, opacity:0}}
                    transition={{duration: 0.25}}
                >This is an animated alert</motion.div>
            )
        }
      </AnimatePresence>
    </div>
  )
}

export default DismissableAlert
