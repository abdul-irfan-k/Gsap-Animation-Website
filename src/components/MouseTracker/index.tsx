import { motion, useMotionValue, useSpring } from "framer-motion";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { useMouseTrackerContext } from "../Provider/MouserTrackerProvider";

const MouseTracker = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const dx = useSpring(x, { damping: 20, stiffness: 300, mass: 0.5 });
  const dy = useSpring(y, { damping: 20, stiffness: 300, mass: 0.5 });
  // const dy = useSpring(y, { damping: 20, stiffness: 900, mass: 0.5 });

  const mouserTrackerContext = useMouseTrackerContext();

  useEffect(() => {
    console.log(
      "mouse tracker special style",
      mouserTrackerContext?.mouseTrackerSpecialStyle
    );
  }, [mouserTrackerContext?.mouseTrackerSpecialStyle]);

  const mouseSize = 40;
  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => window.removeEventListener("mousemove", mouseMoveHandler);
  }, []);

  const mouseMoveHandler = (ev: MouseEvent) => {
    // console.log("ev", ev);
    // mouseTrackerRef.current.
    const { clientX, clientY } = ev;
    // gsap.to(mouseTrackerRef.current, { x: clientX, y: clientY });

    dx.set(clientX);
    dy.set(clientY);
    // mouseTrackerRef.current.style.left = `${clientX}`;
    // mouseTrackerRef.current.style.top = `${clientX}`;
  };

  return (
    <>
      {mouserTrackerContext != null && (
        <motion.div
          className="fixed block w-20 aspect-square rounded-full  z-[100] bg-transparent "
          style={{
            left: dx,
            top: dy,
            transform: "translate(-50%, -50%) scale(0.5)",
            // border: "4px solid rgb(153, 153, 153)",
            borderColor: "rgb(153, 153, 153)",
            borderWidth: "4px",
            ...mouserTrackerContext.mouseTrackerSpecialStyle,
          }}
        ></motion.div>
      )}
    </>
  );
};

export default MouseTracker;
