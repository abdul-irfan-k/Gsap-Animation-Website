"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useMouseTrackerContext } from "../Provider/MouserTrackerProvider";
import MagneticEffect from "../Shared/TextFillAnimation/MagneticEffect";
import MenuButton from "./MenuButton";

const Header = () => {
  const menuButtonRef = useRef<HTMLDivElement>(null);
  const menuIconRef = useRef<HTMLDivElement>(null);
  const mouseTrackerContext = useMouseTrackerContext();

  const [menuButtonHovered, setMenuButtonHovered] = useState<boolean>(false);

  const mouseOverHandler = (event: MouseEvent) => {
    if (menuIconRef.current == undefined || mouseTrackerContext == null) return;

    console.log("mouse over", menuIconRef.current.offsetTop);
    setMenuButtonHovered(true);
    mouseTrackerContext.setMouseTrackerSpecialStyle({
      left:
        menuIconRef.current.offsetLeft + menuIconRef.current.offsetWidth / 2,
      top: menuIconRef.current.offsetTop + menuIconRef.current.offsetHeight / 2,
      transform: "translate(-50%, -50%) scale(0.9)",
      transitionDuration: "0.5s",
      borderColor: "rgb(140,97,68)",
    });
  };

  const mouseLeaveHandler = (event: MouseEvent) => {
    console.log("mouse leave");
    setMenuButtonHovered(false);
    mouseTrackerContext?.setMouseTrackerSpecialStyle(undefined);
  };

  useEffect(() => {
    if (menuButtonRef == null || menuButtonRef.current == undefined) return;

    menuButtonRef.current.addEventListener("mouseover", mouseOverHandler);
    menuButtonRef.current.addEventListener("mouseleave", mouseLeaveHandler);

    return () => {
      if (menuButtonRef == null || menuButtonRef.current == undefined) return;

      menuButtonRef.current.removeEventListener("mouseover", mouseOverHandler);
      menuButtonRef.current.removeEventListener(
        "mouseleave",
        mouseLeaveHandler
      );
    };
  });

  return (
    <>
      <div className="fixed w-screen  px-20   z-[100] ">
        {/* <div className="fixed"> */}
        <div className="flex items-center">
          <div className="relative w-16  aspect-square ">
            <Image alt="logo" src={"/Asset/logo.png"} fill />
          </div>
          {/* </div> */}

          <div
            className="ml-auto  relative text-lg font-medium w-20 py-6  "
            ref={menuButtonRef}
          >
            menu
          </div>
          <MenuButton ref={menuButtonRef} menuButtonHovered={menuButtonHovered} />
          {/* <span></span> */}
        </div>
      </div>
      <div className="relative py-10 block"></div>
    </>
  );
};

export default Header;
