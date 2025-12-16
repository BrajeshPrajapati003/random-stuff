import React from 'react'
import {motion} from 'motion/react'

function FirstDiv() {
  return (
    <div>
        <motion.div
        initial={{ opacity: 0, y:-40 }}
        animate={{ opacity: 1, y:0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <h1 className="bg-red-400 text-purple-700 font-bold italic border-[4px] m-4 p-2">Hello World</h1>

        </motion.div>
    </div>
  )
}

export default FirstDiv
