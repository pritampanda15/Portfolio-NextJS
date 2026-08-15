import { motion } from "framer-motion";
import React from "react";

/**
 * Three-stage wipe on route change. Retuned to the dark palette: an accent
 * sliver leads, followed by two near-black panels.
 */
const TransitionEffect = () => (
  <>
    <motion.div
      className="fixed inset-y-0 right-full z-40 h-screen w-screen bg-accent"
      initial={{ x: "100%", width: "100%" }}
      animate={{ x: "0%", width: "0%" }}
      exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    />
    <motion.div
      className="fixed inset-y-0 right-full z-30 h-screen w-screen bg-elevated"
      initial={{ x: "100%", width: "100%" }}
      animate={{ x: "0%", width: "0%" }}
      transition={{ delay: 0.15, duration: 0.7, ease: "easeInOut" }}
    />
    <motion.div
      className="fixed inset-y-0 right-full z-20 h-screen w-screen bg-bg"
      initial={{ x: "100%", width: "100%" }}
      animate={{ x: "0%", width: "0%" }}
      transition={{ delay: 0.3, duration: 0.7, ease: "easeInOut" }}
    />
  </>
);

export default TransitionEffect;
