import {motion} from "motion/react";
import './App.css'
import AnimatedButton from "./components/AnimatedButton";

function App() {

  return <div className="bg">
    {/* <motion.div
      initial={{ opacity: 0, y:-100 }}
      animate={{ opacity: 1, y:0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <h1 className="bg-red-400 text-purple-700 font-bold italic border-[4px] mt-4 p-3">Hello World</h1>
    </motion.div> */}

    <AnimatedButton children="Get started"/>
  </div>
}

export default App
