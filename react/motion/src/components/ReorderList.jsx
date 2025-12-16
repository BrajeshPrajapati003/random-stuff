import { motion } from "motion/react";
import { useState } from "react";

export default function ReorderList() {
  const [items, setItems] = useState(["A", "B", "C", "D"]);

  return (
    <div className="m-4">
      <button onClick={() => setItems([...items].reverse())}>
        Reverse
      </button>

      <ul>
        {items.map((item) => (
          <motion.li
            key={item}
            layout="position"
            // list reordering with smooth movement -> movement but not stretching
            style={{ padding: 10, margin: 5, background: "#e5e7eb", color: "red" }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
