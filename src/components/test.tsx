"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import {gsap} from "gsap";

const Test = () => {
 const mainRef = useRef<HTMLDivElement>()
 const pinRef = useRef<HTMLDivElement>()

  useLayoutEffect(() => {
   if(mainRef.current == undefined || pinRef.current == undefined) return 
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: mainRef.current,
      start: "top top",
      end: "bottom 150",
      pin: pinRef.current,
      markers: true,
    });
return () => {

}
 
  },[]);

  return (
    <div>
      {/* <section className="description panel blue">
        <div>
          <h1>Basic Pin</h1>
          <p>
            You can <strong>pin</strong> an element while the ScrollTrigger is
            active which basically make it stick in place while the scroll
            position is between the <code>start</code> and <code>end</code>{" "}
            elements/values
          </p>
          <div className="scroll-down">
            Scroll down<div className="arrow"></div>
          </div>
        </div>
      </section> */}

      <div id="orange" className="panel orange align-top" ref={mainRef}>
        <div id="orange-content" ref={pinRef}>
          <code>start: "top top"</code> triggers when the orange element's{" "}
          <strong>top edge</strong> hits the <strong>top</strong> of the
          viewport. <code>end:&nbsp;"bottom&nbsp;150px"</code> stops pinning
          when the <strong>bottom</strong> of the orange element hits{" "}
          <strong>150px</strong> down from the top of the viewport (measurements
          are relative to the top).
        </div>
      </div>

      <section id="red" className="panel red align-top">
        <p id="red-content">
          <code>start: "top center"</code> pins this element when the{" "}
          <strong>top</strong> of the red element hits the{" "}
          <strong>center</strong> of the viewport, and remains pinned for 200px
          because its <code>end</code> is defined as <code>"+=200"</code>
        </p>
      </section>

      <section className="panel purple">Easy Peasy!</section>
    </div>
  );
};

export default Test;
