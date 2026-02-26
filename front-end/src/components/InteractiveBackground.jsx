import React, { useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const InteractiveBackground = () => {
  // 1. Create Motion Values
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // 2. Wrap them in Springs for smooth "floating" movement
  const springX = useSpring(cursorX, { stiffness: 60, damping: 30 });
  const springY = useSpring(cursorY, { stiffness: 60, damping: 30 });

  useEffect(() => {
    const moveGlow = (e) => {
      // Offset by half the width of the glow (300px) so it centers on cursor
      cursorX.set(e.clientX - 300);
      cursorY.set(e.clientY - 300);
    };

    window.addEventListener("mousemove", moveGlow);
    return () => window.removeEventListener("mousemove", moveGlow);
  }, [cursorX, cursorY]);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-[#020617]">
      {/* Moving Cyan Glow */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        className="absolute w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]"
      />

      {/* Static Purple Glow (to give contrast) */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
    </div>
  );
};

export default InteractiveBackground;
