"use client";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import ScrollTrigger from "gsap/ScrollTrigger";
// import ScrollSmoother from 'gsap/ScrollSmoother'
import gsap from "gsap";
import { transform } from "next/dist/build/swc";

const MainContent = () => {
  const imageContainer = useRef<HTMLDivElement>();
  const testRef = useRef<HTMLDivElement>();

  const [isActiveScrollAnimation, setIsActiveScrollAnimation] =
    useState<boolean>(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const element = imageContainer.current;

    gsap.to(element,{
      scrollTrigger: {
      trigger: element,
      start: "too 100",
      // start: "top-=100px",
      end: "1200 100",
      scrub: 1,
      pin: true,
      pinSpacing:true,
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
        className="mt-32 relative  flex align-top h-[80vh] w-full  overflow-hidden"
        style={{
          width: "100%",
          clipPath:"inset(0% 30%)"
        }}
      >

        <div
          className="relative   h-full w-full overflow-hidden"
          ref={testRef}
        >
          <Image
            alt="image"
            src={"/Asset/00hero.jpg"}
            fill
            // className="scale-[1.25]   "
            // style={{paddingTop:isActiveScrollAnimation ? "0px" : "200px"}}
          />
        </div>
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
    </div>
  );
};

export default MainContent;
