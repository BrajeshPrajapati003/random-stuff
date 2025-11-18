import { hover } from "motion"
import * as motion from "motion/react-client"

// function page() {
//   return (
//     <div>
//       <motion.div 
//       className='box'
//       animate={{x: 200}}/>
//     </div>
//   )
// }

// export default page


const Home = ()=> {
  const boxVariants = {
    initial: {scale: 1, rotate: 0, skew: 0},
    hover: {
      scale: 1.2,
      rotate: 15,
      skew: "15deg",
      transitions: {duration: 0.3},
    },
    click: {scale: 0.9, rotate: -15, transition: {duration: 0.3}},
  } 

  return <>
    <motion.div className="w-40 bg-blue-500 rounded-lg"
    variants={boxVariants} />
  </>
}

export default Home;