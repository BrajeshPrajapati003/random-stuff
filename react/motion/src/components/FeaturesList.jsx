import React from 'react'
import {motion} from "motion/react"

const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { 
            staggerChildren : 0.15, delayChildren: 2 
        }
    },
};

const item = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0},
};

function FeaturesList() {

    const features = ["Brajesh", "Vibhanshu", "Shivam", "Fast", "Furious", "bullet", "train"];

  return (
    <div className='m-4'>
      <motion.ul variants={container} initial="hidden" animate="visible">
        {features.map((feature) => (
            <motion.li key={feature} variants={item}
            >{feature}</motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

export default FeaturesList
