import { motion } from "framer-motion";
import React, { FC, useRef, useState } from "react";

interface MagneticEffectProps {
  children: React.ReactNode;
}

const MagneticEffect: FC<MagneticEffectProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const mouseMoveHandler = (ev: MouseEvent) => {
    if (containerRef == null || containerRef.current == undefined) return;

    const { clientX, clientY } = ev;
    const { width, left, height, top } =
      containerRef.current.getBoundingClientRect();

    const middleX = clientX - (width + left / 2);
    const middleY = clientY - (height + top / 2);
    setPosition({ x: middleX * 0.01, y: middleY * 0.01 });
  };
  const resetHandler = () => {
    setPosition({ x: 0, y: 0 });
  };
  return (
    <motion.div
      style={{ position: "relative" }}
      ref={containerRef}
      //@ts-ignore
      onMouseMove={mouseMoveHandler}
      onMouseLeave={resetHandler}
      animate={{ x: position.x, y: position.y }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticEffect;
