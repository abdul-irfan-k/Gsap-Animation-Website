"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

const Service = () => {
  const arr: Array<{ light: string; bold: string }> = [
    { light: "WEB", bold: "DESIGN" },
    { light: "MOBILE", bold: "APP DEVELOPMENT" },
    { light: "E COMMERCE", bold: "SOLUTIONS" },
    { light: "DIGITAL", bold: "MARKETING" },
    { light: "UI/UX", bold: "DESIGN" },
    { light: "BRAND", bold: "STRATEGY" },
    { light: "CEO", bold: "OPTIMIZATION" },
    { light: "SOCIAL", bold: "MEDIA MANAGEMENT" },
    { light: "CONTENT", bold: "CREATIONG" },
    { light: "DATA", bold: "ANALYST" },
  ];
  const translateZValue = [186, 175, 143, 93, 32, -32, -93, -143, -175, -186];
  // const translateYValue = [0, 57, 119, 161, 183, 183, 161, 119, 63, -10];
  const translateYValue = [0, 120, 240, 360, 480, 480, 360, 240, 120, -10];

  const serviceContainerRef = useRef<HTMLDivElement>();
  const serviceScrollContainerRef = useRef<HTMLLIElement>();

  useEffect(() => {
    const element = serviceContainerRef.current;
    if (element == undefined) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(serviceContainerRef.current, {
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        // start: "top-=100px",
        end: "150 bottom-=200",
        scrub: 1,
        pinSpacing: true,

        toggleActions: "restart none none none",
      },
      clipPath: "inset(0% 0%)",
    });

    gsap.to(serviceScrollContainerRef.current, {
      scrollTrigger: {
        trigger: element,
        start: "top top",
        // start: "top-=100px",
        end: "2000 100",
        scrub: 1,
        pin: element,
        pinSpacing: true,
        // markers: {
        //   startColor: "yellow",
        //   endColor: "yellow",
        // },

        toggleActions: "restart none none none",
      },
      transform: "rotateX(180deg)",
    })
  }, []);

  return (
    <div className=" h-screen  ">
      <div
        className="w-full h-screen bg-[#F9F9F9] text-black"
        ref={serviceContainerRef}
        style={{ clipPath: "inset(0% 10%)" }}
      >
        <div className="text-center">our services</div>
        <div
          className="flex justify-center items-center overflow-hidden h-[500px]"
          style={{
            maskImage:
              "linear-gradient(transparent 25%, black 40%, black 60%, transparent 75%)",
            WebkitMaskImage:
              "linear-gradient(transparent 25%, black 40%, black 60%, transparent 75%)",
            // maskImage:"linear-gradient(transparent 25%, red 40%, black 60%, transparent 75%)"
          }}
        >
          <div
            className="w-full flex flex-col h-screen"
            style={{
              transformStyle: "preserve-3d",
              transform: "rotateX(40deg)",
              height: "200px",
            }}
            ref={serviceScrollContainerRef}
          >
            {arr.map((elm, index) => {
              return (
                <li
                  style={{
                    transform: `translate3d(0px,${
                      translateYValue[index] + 100
                    }px,${translateZValue[index]}px) rotateX(${
                      index * -20
                    }deg) `,
                    backfaceVisibility: "hidden",
                    position: "absolute",
                    width: "100%",
                    zIndex: `${arr.length + 1 - index}`,
                    height: "400px",
                  }}
                  className="gap-1 flex items-center justify-center text-6xl "
                  key={index}
                >
                  <span className="font-normal">{elm.light}</span>
                  <span className="font-extrabold">{elm.bold}</span>
                </li>
              );
            })}
          </div>
        </div>
        <div>sadfasdf</div>
      </div>
    </div>
  );
};

export default Service;
