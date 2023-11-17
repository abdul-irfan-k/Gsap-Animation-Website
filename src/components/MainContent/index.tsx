"use client";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import { MotionValue, motion, useInView, useMotionValue } from "framer-motion";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import PopUpText from "../PopUpText";

const clamp = (num: number, min: number, max: number): number => {
  return Math.min(Math.max(num, min), max);
};

const scrollTriggerContext = React.createContext<MotionValue>(null);
export const useScrollTriggerContext = (): MotionValue<any> =>
  useContext(scrollTriggerContext);

const MainContent = () => {
  const imageContainer = useRef<HTMLDivElement>(null);
  const progress = useMotionValue(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const element = imageContainer.current;
    if (element == undefined) return;

    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 50",
        // start: "top-=100px",
        end: "1600 100",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        // markers: {
        //   startColor: "yellow",
        //   endColor: "yellow",
        // },

        toggleActions: "restart none none none",
        onUpdate: (instance) => {
            const pr = (instance.progress - 0.6) * 10 * 0.25;
            progress.set(clamp(pr, 0, 1));
        },
      },
      clipPath: `inset(0% 0%)`,
    });
    gsap.to(textContainerRef.current, {
      scrollTrigger: {
        trigger: textContainerRef.current,
        start: "300 bottom",
        // start: "top-=100px",
        end: "1200 100",
        scrub: 1,
        // markers: {
        //   startColor: "red",
        //   endColor: "green",
        // },

        toggleActions: "restart none none none",
      },
      translateY:"-110%"
    });
  }, []);

  const textContainerRef = useRef<HTMLDivElement>(null);
  const isInViewTextContainer = useInView(textContainerRef);

  return (
    <div className="flex flex-col items-center">
      <div className="mt-10 text-7xl font-medium">THE MANIFESTO</div>
      <div className="my-3 text-7xl font-extrabold">PORTFOLIO WEBSITE</div>
      <div className="mt-5  translate-x-[50%] font-bold text-lg">
        Experience the <br />
        perfect belnd of creativity <br />
        and functionality
      </div>

      <div
        ref={imageContainer}
        className=" mt-32 relative   flex flex-col align-top  w-full  overflow-hidden"
        style={{
          width: "100%",
          clipPath: "inset(10% 30%)",
        }}
      >
        <div className="relative  h-[90vh] w-full overflow-hidden">
          <Image
            alt="image"
            src={"/Asset/00hero.jpg"}
            fill
            className="scale-[1.25]   "
            priority
            // style={{paddingTop:isActiveScrollAnimation ? "0px" : "200px"}}
          />
        </div>
        <motion.div
          className=" top-full text-center w-[90%] translate-y-[10%] mx-auto text-7xl font-bold "
          ref={textContainerRef}
          variants={{
            open: {},
          }}
          // animate={isInViewTextContainer ? "open" : "closed"}
        >
          <scrollTriggerContext.Provider value={progress}>
            <PopUpText isInViewTextContainer={isInViewTextContainer} />
          </scrollTriggerContext.Provider>
        </motion.div>
      </div>

      <div className=" px-20 py-10 flex translate-y-[-50%]  w-full">
        <div className="flex-1 flex justify-evenly">
          <div>2023</div>
          <div>Portfolio website</div>
        </div>
        <div className="flex-1 font-medium text-lg">
          our template pages are a playground for creativity, <br />
          where we leverage an assortment of shortcuts to <br />
          build captivating content. This enables us to <br />
          demonstrate the limitless potential and showcase the <br />
          impressive features of our template.
        </div>
      </div>
    </div>
  );
};

export default MainContent;
