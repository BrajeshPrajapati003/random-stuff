import { motion } from "motion/react";
import { useState } from "react";

export default function BasicLayout() {
  const [show, setShow] = useState(false);

  return (
    <div className="m-4">
      <button onClick={() => setShow(!show)}>Toggle</button>

      <motion.div
        layout 
        // auto position + size
        style={{ background: "#4f46e5", padding: 16, marginTop: 10 }}
      >
        {show && (
          <motion.div
            layout
            style={{ background: "#a5b4fc", padding: 16, color: "purple" }}
          >
            Hello Motion
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
