import { motion } from "motion/react";

function LiveBadge() {
  return (
    <div className="flex items-center gap-2 bg-pink-700 px-3 py-1 rounded-full text-white text-sm font-semibold m-4">
      
      <motion.span
        className="w-2 h-2 bg-white rounded-full"
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />

      LIVE
    </div>
  );
}

export default LiveBadge;
