import React, { useState } from 'react'
import {motion} from "motion/react"

function Accordion() {

    const [open, setOpen] = useState(false);

  return (
    <motion.div className='border rounded-xl'>
      <button onClick={()=> setOpen(!open)}>Toggle</button>

      {
        open && (
            <motion.div className='p-3 bg-blue-400 rounded-b-xl '
                layout="size"
                // prevents unwanted vertical shifting of siblings (size-only animation)
            >This content expands smoothly</motion.div>
        )
      }
    </motion.div>
  )
}

export default Accordion
