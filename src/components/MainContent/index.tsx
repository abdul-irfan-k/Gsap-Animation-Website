"use client";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import ScrollTrigger from "gsap/ScrollTrigger";
// import ScrollSmoother from 'gsap/ScrollSmoother'
import gsap from "gsap";
import { transform } from "next/dist/build/swc";
import { slideUpAnimation } from "./anim";
import SplitByLine from "../Shared/SplitByLine/SplitByLine";

const MainContent = () => {
  const imageContainer = useRef<HTMLDivElement>();
  const testRef = useRef<HTMLDivElement>();

  const [isActiveScrollAnimation, setIsActiveScrollAnimation] =
    useState<boolean>(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const element = imageContainer.current;

    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "too 50",
        // start: "top-=100px",
        end: "1200 100",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        // markers: {
        //   startColor: "red",
        //   endColor: "green",
        // },

        toggleActions: "restart none none none",
        onToggle: (ev) => {
          console.log("toggle");
          setIsActiveScrollAnimation(true);
        },
      },
      clipPath: `inset(0% 0%)`,
      // top: "0",
      // direction: "top",
    });
  }, []);

  const animationText = `Stand out from the crowd and make a statement with our sleek and stylish
  portfolio template that speaks volumes about your creativity.`;

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
        className="mt-32 relative  flex align-top h-[90vh] w-full  overflow-hidden"
        style={{
          width: "100%",
          clipPath: "inset(10% 30%)",
        }}
      >
        <div className="relative   h-full w-full overflow-hidden" ref={testRef}>
          <Image
            alt="image"
            src={"/Asset/00hero.jpg"}
            fill
            className="scale-[1.25]   "
            priority
            // style={{paddingTop:isActiveScrollAnimation ? "0px" : "200px"}}
          />
        </div>
      </div>

      <div
        className="text-center w-[90%] mx-auto text-7xl font-bold "
        ref={textContainerRef}
        style={
          {
            // backgroundImage: "linear-gradient(#fff,#fff)",
            // WebkitBackgroundClip: "text",
            // backgroundSize: "30% 100%",
            // WebkitTextFillColor: "rgba(0,0,0,0.1)",
          }
        }
      >
        <span
          style={{
            backgroundImage: "linear-gradient(#000, #000)",
            WebkitBackgroundClip: "text",
            backgroundSize: "10% 100%",
            WebkitTextFillColor: "rgba(255,255,255,0.1)",
          }}
        >
          {animationText.split(" ").map((word, index) => {
            return (
              <motion.span
                key={index}
                variants={slideUpAnimation}
                initial="initial"
                animate={isInViewTextContainer ? "open" : "closed"}
                style={{}}
                custom={index}
              >
                {word + " "}
              </motion.span>
            );
          })}
        </span>
      </div>

      <div className=" px-20 py-64 flex  w-full">
        <div className="flex-1">2023</div>
        <div className="flex-1 font-medium text-lg">
          our template pages are a playground for creativity, <br />
          where we leverage an assortment of shortcuts to <br />
          build captivating content. This enables us to <br />
          demonstrate the limitless potential and showcase the <br />
          impressive features of our template.
        </div>
      </div>

      <div
        
      >
        
     <SplitByLine>
     our template pages are a playground for creativity, 
          where we leverage an assortment of shortcuts to 
          build captivating content. This enables us to 
          demonstrate the limitless potential and showcase the 
          impressive features of our template.
     </SplitByLine>

      </div>
    </div>
  );
};

export default MainContent;

// background-size: 58.9392% 100%;
// -webkit-text-fill-color: rgba(255,255,255,0.1);
// background-image: linear-gradient(#fff, #fff);
// /* position: relative; */
// /* display: inline; */
// -webkit-text-fill-color: rgba(255,255,255,0.2);
// -webkit-background-clip: text;
// background-repeat: no-repeat;
// /* background-image: linear-gradient(#000, #000); */
// background-size: 61.9392% 100%;
// /* width: auto; */
// vertical-align: baseline;
