import {motion} from "motion/react"

function LiveBadge2() {
  return (
    <motion.div
      className="relative flex items-center justify-center
                 bg-pink-700 text-white font-bold text-sm
                 rounded-xl w-[70px] h-[28px] m-4"
      animate={{
        boxShadow: [
          "0 0 0px rgba(236,72,153,0.6)",
          "0 0 12px rgba(236,72,153,0.9)",
          "0 0 0px rgba(236,72,153,0.6)",
        ],
      }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      LIVE
    </motion.div>
  );
}

export default LiveBadge2;
