import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function Card() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <motion.div
        layoutId="profile"
        // Shared layout transition
        className="w-[250px] p-4 bg-emerald-300 rounded-lg cursor-pointer text-red-800"
        onClick={() => setOpen(true)}
      >
        Click Me
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="profile"
            className="fixed inset-0 m-auto w-[200px] h-[200px] bg-white bg-yellow-300 rounded-lg shadow-xl text-purple-600 p-6"
            onClick={() => setOpen(false)}
          >
            Expanded View
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Card;
