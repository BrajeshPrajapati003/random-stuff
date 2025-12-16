import React, { useState } from "react";
import { motion } from "motion/react";

function CollapsibleList() {
  const [expanded, setExpanded] = useState(null);
  const items = [1, 2, 3, 4, 5];

  return (
    <div className="m-4 space-y-3">
      {items.map((id) => (
        <motion.div
          key={id}
          layout
          onClick={() =>
            setExpanded((prev) => (prev === id ? null : id))
          }
          className="cursor-pointer rounded-lg bg-slate-200 p-4"
        >
          {/* Header */}
          <motion.h3 layout className="font-semibold text-red-500">
            Item {id}
          </motion.h3>

          {/* Collapsible content */}
          {expanded === id && (
            <motion.div
              layout="size"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-2 text-sm text-slate-700 text-cyan-300"
            >
              This is expanded content for item {id}.
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default CollapsibleList;
